import '../css/components/footer.css'

export default function Footer() {
    const date = new Date();

    return (
        <>
            <div className="footer-container">
                <footer>
                    <p>Copyright © {date.getFullYear()} • Made with &lt;3</p>
                </footer>
            </div>
        </>
    );
}