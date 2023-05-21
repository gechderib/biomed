import { useContext } from "react";
import AddPatient from "../components/AddPatient";
import Layout from "../components/Layout";
import TabAdd from "../components/TabAdd";
import { UiContext } from "../store/uiCtx";
import AddDoc from "../components/AddDoc";

const AddNew = () => {
  const uiCtx = useContext(UiContext);
  return (
    <Layout>
      <div className="px-24 py-10">
        <TabAdd />
        {uiCtx.isAddingDoc ? <AddDoc /> : <AddPatient />}
      </div>
    </Layout>
  );
};

export default AddNew;
