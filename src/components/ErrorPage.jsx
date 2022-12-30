import {Link} from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="tw-bg-slate-100 tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center">
            <div className="tw-text-slate-800 display-6">Oops</div>
            <div className=" tw-text-slate-800  mt-3">Sorry, an unexpected error has occurred.</div>
            <div className="tw-text-slate-500  mt-3">
                Page not found
            </div>
            <Link to={'/'} className="btn btn-primary mt-3 rounded-pill">Go to Home</Link>
        </div>
    );
}