import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import BadgeIcon from "@mui/icons-material/Badge";

interface CredentialsTypeFieldsProps {
  mode: "signin" | "login";
}

const CredentialsTextFields: React.FC<CredentialsTypeFieldsProps> = ({
  mode,
}) => {
  return (
    <div className="w-full">
      {mode === "login" && (
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
      )}
      
      {mode === "signin" && (
        <div className="flex flex-col gap-3 pt-5 w-full">
          <label className="input input-bordered flex items-center gap-2">
            <BadgeIcon fontSize="small" />
            <input type="text" className="grow" placeholder="Username" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <EmailIcon fontSize="small" />
            <input type="text" className="grow" placeholder="Email" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <KeyIcon fontSize="small" />
            <input type="password" className="grow" placeholder="Password" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <KeyIcon fontSize="small" />
            <input
              type="password"
              className="grow"
              placeholder="Repeat password"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default CredentialsTextFields;
