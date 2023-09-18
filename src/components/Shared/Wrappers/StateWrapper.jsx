import Store from "@/redux";
import { Provider } from "react-redux";

const StateWrapper = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StateWrapper;
