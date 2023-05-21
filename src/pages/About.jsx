import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="px-16 text-gray-600">
        <p className="text-2xl my-4 underline text-center">IOT BASED INTRAVENOUS MONITORING SYSTEM</p>
        <div className="border-2 p-5 rounded-2xl">
        <p className="mb-4">
          In our current medical care system, the monitoring of patients in a
          hospital throughout the day is a tiresome process. Sometimes doctors
          or nurses are too busy, so they cant monitor each patient. This type
          of thing may cause a problem in the healthcare sector or in patient
          life as well. The health-related work should be properly done and done
          in an accurate manner. An example of this type of work in our hospital
          is injecting saline or intravenous (IV) fluids into the veins of
          patients. If the drip system is not monitored on time, it will cause
          problems like backflow of fluid, blood loss etc. In order to reduce
          the workload and overcome such a critical situation in the area of an
          intravenous drip monitoring system, we proposed a system called an IOT
          based intravenous drip monitoring system.
        </p>
        <p className="mb-4">
          The Internet of Things (IoT) is defined as the network of physical
          objects composed of devices, vehicles, buildings, and other things
          embedded with electronics, software, and sensors that facilitate these
          objects collection and exchange of data among each other. Using this
          technology, objects are anticipated and remotely controlled over the
          existing network infrastructure. This helps us integrate the physical
          world into a computer-based system. IOT makes things easier, and it
          leads to the automation of daily tasks, leading to a better quality of
          life and saving money as well as time.
        </p>
        <p>
          Generally, as population density increases, the emphasis on health
          care also increases. Hence, it is imperative for everyone in this
          world to take proper care of their health. IoT plays a major role in
          the health monitoring system. We can implement this technology in
          hospital management systems, by introducing intelligent devices and
          subsystems, thereby allowing hospitals to save on operation costs,
          strengthen the medical experience of patients, and reduce the capital
          and labor intensity of medical staff. IV therapy is still a
          challenging problem. In our current medical care system, we manually
          do all this monitoring. We need to alert the medical staff about the
          fluid level in a bottle that is being injected through the patient’s
          vein (IV therapy) and the patients condition in real time.
        </p>
        </div>
        
      </div>
    </Layout>
  );
};

export default About;
