"use client";
import React, { useState } from "react";

const ReportIncident: React.FC = () => {
  const [location, setLocation] = useState("");
  const [problemType, setProblemType] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [contactInfo, setContactInfo] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  interface PhotoUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
  }

  const handlePhotoUpload = (event: PhotoUploadEvent) => {
    const files: File[] = Array.from(event.target.files || []);
    setPhotos(files);
  };

  const handleAutoDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=2a746a0ddbd94c3a9eef0823539c7c1a`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
              const address = data.results[0].formatted;
              setLocation(address);
            } else {
              alert("Unable to retrieve address.");
            }
          } catch (error) {
            console.error("Error fetching address: ", error);
          }
        },
        (error) => {
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulate a submission process
    setSubmissionStatus("Submitting your report...");

    // Simulate a delay for submission
    setTimeout(() => {
      setSubmissionStatus("Your report has been submitted successfully!");
      // Reset form fields
      setLocation("");
      setProblemType("");
      setDescription("");
      setPhotos([]);
      setContactInfo("");
    }, 2000);
  };

  return (
    <div className="bg-gray-100 p-5">
      <h2 className="text-2xl font-bold mb-3">Incident Report</h2>
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow">
        <div className="mb-4">
          <div className="w-full flex justify-between items-center">
            <label className="block mb-1">Location*</label>
            <button
              type="button"
              onClick={handleAutoDetectLocation}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Auto-detect Location
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter location or auto-detect"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded w-full mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Type of Problem*</label>
          <select
            value={problemType}
            onChange={(e) => setProblemType(e.target.value)}
            className="p-2 border rounded w-full"
            required
          >
            <option value="">Select type of problem</option>
            <option value="Injury">Injury</option>
            <option value="Stray Animal">Stray Animal</option>
            <option value="Lost Pet">Lost Pet</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description*</label>
          <textarea
            placeholder="Describe the incident"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded w-full"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Upload Photos*</label>
          <input
            type="file"
            multiple
            onChange={handlePhotoUpload}
            className="p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Reporter's Conatact No.</label>
          <input
            type="text"
            placeholder="Reporter's contact information"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:scale-105"
        >
          Submit Report
        </button>
      </form>

      {submissionStatus && (
        <div className="mt-4 text-green-600">{submissionStatus}</div>
      )}
    </div>
  );
};

export default ReportIncident;
