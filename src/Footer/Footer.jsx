import "./Footer.css"

export function Footer() {

    return (
        <div className="footer-container">
            <p>Designed and developed by</p>
            <div className="personal-brand">
                <svg width="30" viewBox="0 0 116 99" fill="#136F63" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5 62.5L1 1H25.2951C44.2871 1 56.8706 20.7004 48.8852 37.932L37.5 62.5Z"
                        fill="#136F63" />
                    <path d="M57.5 98L42 70.5L62.7496 25.4344C69.6069 10.5412 84.504 1 100.9 1H115L57.5 98Z"
                        fill="#136F63" />
                    <path d="M37.5 62.5L1 1H25.2951C44.2871 1 56.8706 20.7004 48.8852 37.932L37.5 62.5Z"
                        stroke="#136F63" />
                    <path d="M57.5 98L42 70.5L62.7496 25.4344C69.6069 10.5412 84.504 1 100.9 1H115L57.5 98Z"
                        stroke="#136F63" />
                </svg>
                <a href="https://victoriad.web.app" target={"_BLANK"}>Victoria Derudder</a>
            </div>
        </div>
    );
}