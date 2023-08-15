import { CFooter, CLink} from "@coreui/react";

const Footer = ()=>{
    return(
        <section className="d-flex justify-content-between align-content-around pt-3 bg-light">
            <div className="mx-3 justify-content-end">
                <CLink href="https://coreui.io" className="text-decoration-none">CoreUI</CLink>
                <span>&copy; 2023 creativeLabs.</span>
            </div>
            <div className="mx-3 justify-content-end lh-0">
                <CLink href="https://github.com/ruizlaruin/Sunday" className="text-decoration-none">Jean Ruiz</CLink>
                <p>StetaMalo</p>
            </div>
            <div className="mx-3 ">
                <span>Powered by</span>
                <CLink href="https://coreui.io" className="text-decoration-none">CoreUI</CLink>
            </div>
        </section>
    )
}

export default Footer;