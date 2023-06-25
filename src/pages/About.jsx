import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="px-16 text-gray-600">
        <p className="text-2xl my-4 underline text-center">IoT Based Intravenous Fluid Monitoring System</p>
        <div className="border-2 p-5 rounded-2xl">
        <p className="mb-4 text-justify">
        Intravenous (IV) fluids are essential for providing hydration, medication delivery, and electrolyte balance in patients who cannot consume fluids orally or require immediate absorption. Effective monitoring and regulation of IV fluid administration are crucial for patient safety and well-being. This research focused on the design and development of an Internet of Things (IoT) based Intravenous Fluid Monitoring and Alarming System. The system incorporated the measurement of the amount of fluid left and flow rate, along with a buzzer system to alert nurses when the fluid level is below the optimum and the flow rate is outside the preset range set by the physician. The objective is to enhance patient safety, improve fluid administration efficiency, and alleviate the workload of nurses and physicians. By continuously monitoring the amount of fluid left and flow rate in real-time, the system provides timely feedback and alerts healthcare professionals to potential issues, enabling prompt intervention and prevention of adverse events.
        </p>
        
  
        </div>
        
      </div>
    </Layout>
  );
};

export default About;
