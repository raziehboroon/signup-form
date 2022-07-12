import { toast } from "react-toastify";

const notify = (text, type) => {
  if (type === "success") {
    toast.success(text);
  } else if (type === "failure") {
    toast.error(text);
  }
};
export default notify;
