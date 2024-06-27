import { Provider } from "react-redux";
import { store } from "../../utils/redux/store";

export default function ReduxProvider({ children }: { readonly children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}