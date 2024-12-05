'use client';
import React, { useState } from "react";

const ForNgosPage: React.FC = () => {
  const [ngoName, setNgoName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState({
    medicalAid: false,
    rescue: false,
    shelter: false,
    adoption: false,
    other: false,
    otherDetails: "",
  });
  const [operatingHours, setOperatingHours] = useState("");
  const [location, setLocation] = useState("");
  const [mission, setMission] = useState("");
//   const [documents, setDocuments] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setServices((prev) => ({ ...prev, [name]: checked }));
  };

//   const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files ? Array.from(event.target.files) : [];
//     setDocuments(files);
//   };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulate a submission process
    setSubmissionStatus("Submitting your registration...");

    // Simulate a delay for submission
    setTimeout(() => {
      setSubmissionStatus(
        "Your registration has been submitted successfully! An acknowledgment email will be sent to you."
      );
      // Reset form fields
      setNgoName("");
      setRegistrationNumber("");
      setAddress("");
      setCity("");
      setState("");
      setCountry("");
      setContactName("");
      setPhoneNumber("");
      setEmail("");
      setServices({
        medicalAid: false,
        rescue: false,
        shelter: false,
        adoption: false,
        other: false,
        otherDetails: "",
      });
      setOperatingHours("");
      setLocation("");
      setMission("");
      setDocuments([]);
      setConsent(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-100 p-5">
      <h2 className="text-2xl text-center font-bold mb-3">
        Partner with us to help animals in need!
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow">
        <h3 className="text-xl font-semibold mb-3">NGO Details</h3>
        <div className="mb-4">
          <label className="block mb-1">Name of the NGO</label>
          <input
            type="text"
            value={ngoName}
            onChange={(e) => setNgoName(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Registration Number (optional)</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
        <div className="mb-4">
          <label className="block mb-1">Name of the Contact Person</label>
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <h3 className="text-xl font-semibold mb-3">Services Offered</h3>
        <div className="mb-4">
          <label className="block mb-1">Select Services</label>
          <div className="flex flex-col">
            <label className="flex gap-1">
              <input
                type="checkbox"
                name="medicalAid"
                checked={services.medicalAid}
                onChange={handleServiceChange}
              />
              Medical Aid
            </label>
            <label className="flex gap-1">
              <input
                type="checkbox"
                name="rescue"
                checked={services.rescue}
                onChange={handleServiceChange}
              />
              Rescue
            </label>
            <label className="flex gap-1">
              <input
                type="checkbox"
                name="shelter"
                checked={services.shelter}
                onChange={handleServiceChange}
              />
              Shelter
            </label>
            <label className="flex gap-1">
              <input
                type="checkbox"
                name="adoption"
                checked={services.adoption}
                onChange={handleServiceChange}
              />
              Adoption
            </label>
            <label className="flex gap-1">
              <input
                type="checkbox"
                name="other"
                checked={services.other}
                onChange={handleServiceChange}
              />
              Other
            </label>
            {services.other && (
              <input
                type="text"
                placeholder="Please specify"
                value={services.otherDetails}
                onChange={(e) =>
                  setServices({ ...services, otherDetails: e.target.value })
                }
                className="p-2 border rounded w-full mt-2"
              />
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Operating Hours</label>
          <input
            type="text"
            value={operatingHours}
            onChange={(e) => setOperatingHours(e.target.value)}
            placeholder="e.g., 24/7 or specific hours"
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Location Cordinates</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location coordinates"
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Additional Information</label>
          <textarea
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            placeholder="Short description about your mission"
            className="p-2 border rounded w-full"
            rows={4}
          />
        </div>

        {/* <div className="mb-4">
          <label className="block mb-1">Upload Documents (optional)</label>
          <input
            type="file"
            multiple
            onChange={handleDocumentUpload}
            className="p-2 border rounded w-full"
          />
        </div> */}

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="mr-2"
              required
            />
            I agree to the terms of service and data sharing.
          </label>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Registration
        </button>
      </form>

      {submissionStatus && (
        <div className="mt-4 text-green-600">{submissionStatus}</div>
      )}
    </div>
  );
};

export default ForNgosPage;
