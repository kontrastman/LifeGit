import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

const CredentialsTextFields: React.FC = () => {
    return(
        <div className="flex flex-col gap-3 pt-5 w-full">
            <label className="input input-bordered flex items-center gap-2">
              <EmailIcon fontSize="small" />
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <label className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <KeyIcon fontSize="small" />
                <input type="password" className="grow" placeholder="Password" />
              </label>
              <div className="label">
                <span />
                <span className="label-text-alt">
                  <a className="link link-secondary">Forgot password?</a>
                </span>
              </div>
            </label>
          </div>
    )
}

export default CredentialsTextFields;