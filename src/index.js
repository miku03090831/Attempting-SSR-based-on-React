import { hydrateRoot } from "react-dom/client";
import { getPage } from "./router/getPage.js";

const hydrateAtClient = async ()=>{
    const Page = await getPage()
    if(!Page) return null
    hydrateRoot(document.getElementById("root"), <Page />);
}

hydrateAtClient()