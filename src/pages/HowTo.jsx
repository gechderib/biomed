import Layout from "../components/Layout";

const HowTo = () => {
  return (
    <Layout>
      <div className="px-16 text-gray-600">
        <p className="text-2xl my-4 underline text-center">
          IoT Based Intravenous Fluid Monitoring System
        </p>
        <div className="border-2 p-5 rounded-2xl">
          <p className="mb-4 text-justify">
            <span className="font-bold">User Guide:</span> IV Fluid Monitoring
            System
          </p>
          <p className="mb-4 text-justify">
            <span className="font-bold">System Overview: </span>Real-time
            monitoring of IV fluid flow rate Utilizes weight sensor and advanced
            algorithms Enhances patient safety and optimizes fluid delivery
          </p>

          <p className="text-2xl mb-2">Getting Started: </p>
          <p className="mb-4 text-justify">
            <span className="font-bold">Log in page:</span> Obtain login
            credentials from your healthcare facility Access the system through
            the provided website URL Login using your username and password
          </p>

          <p className="mb-4 text-justify">
            <span className="font-bold">Patients:</span> After log in to the
            website, you can add patient under a particular doctor and manages
            the recorded patient IV fluid
          </p>

          <p className="mb-4 text-justify">
            <span className="font-bold">Monitoring IV Fluids:</span> Input the
            desired IV fluid type, its threshold fluid level and flow rate
            range monitor the displayed fluid level and flow rate and take
            action if abnormalities or concerns are detected
          </p>

          <p className="mb-4 text-justify">
            <span className="font-bold">Alarms: </span>Input the desired IV fluid
            type, its threshold fluid level and flow rate range monitor the
            displayed fluid level and flow rate and take action if abnormalities
            or concerns are detected
          </p>

          <p className="mb-4 text-justify">
            <span className="font-bold">Calibration: </span>Regularly calibrate
            weight sensor and Perform routine checks of the alarm systems refer
            to troubleshooting resource
          </p>
          <p>Copyright: ©2023 Abduselam Bethel Frehiwet Gamachis & Matiwos</p>
        </div>
      </div>
    </Layout>
  );
};

export default HowTo;
