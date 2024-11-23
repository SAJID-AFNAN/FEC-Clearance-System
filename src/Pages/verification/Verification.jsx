import { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { toast } from "react-toastify";
// import swal from 'sweetalert';
import "react-toastify/dist/ReactToastify.css";

const VerificationPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const navigate = useNavigate()
  const [studentData, setStudentData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sigCanvas = useRef();
  console.log(email, "e");

  useEffect(() => {
    if (email) {
      fetch(`https://fec-clearance-server.onrender.com/student/${email}`)
        .then((res) => res.json())
        .then((data) => setStudentData(data))
        .catch((error) => console.error("Error fetching student data:", error));
    }
  }, [email]);

  const handleClearSignature = () => {
    sigCanvas.current.clear();
  };

  const handleSubmit = () => {
    if (sigCanvas.current.isEmpty()) {
      toast.error("Please provide a signature before submitting.");
      return;
    }

    setIsSubmitting(true);
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    fetch(`https://fec-clearance-server.onrender.com/student/${email}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ signature: signatureData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Verification successful!");
        setTimeout(() => {
          navigate("/allverified-student");
        }, 1000);
        // swal("Successfully! given clearance", {
        //   icon: "success",
        // });
      })
      .catch((error) => {
        console.error("Error updating verification:", error);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container mx-auto my-6 max-w-4xl p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Student Clearance Verification</h1>
      {studentData ? (
        <>
          <div className="border-b pb-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Student Information</h2>
            <p className="text-lg"><strong>Name:</strong> {studentData.name}</p>
            <p className="text-lg"><strong>Email:</strong> {studentData.email}</p>
            <p className="text-lg"><strong>Registration Number:</strong> {studentData.reg}</p>
            <p className="text-lg"><strong>Department:</strong> {studentData.dept}</p>
            <p className="text-lg"><strong>Batch:</strong> {studentData.batch}</p>
            <p className="text-lg"><strong>Session:</strong> {studentData.session}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Teacher's Signature</h3>
            <SignatureCanvas
              ref={sigCanvas}
              penColor="blue"
              canvasProps={{
                width: 500,
                height: 200,
                className: "border rounded shadow-md",
              }}
            />
            <div className="mt-4 flex gap-3">
              <button
                onClick={handleClearSignature}
                className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition-all"
              >
                Clear
              </button>
              <button
                onClick={handleSubmit}
                className={`bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition-all ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-lg text-gray-500">Loading student data...</p>
      )}
    </div>
  );
};

export default VerificationPage;
