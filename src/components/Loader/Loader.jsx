import 'bootstrap/dist/css/bootstrap.min.css';

export const Loader = () =>
    <div className="d-flex justify-content-center">
        <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>;