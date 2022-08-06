import GitHubIcon from "@mui/icons-material/GitHub";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div
        className={style.footer_info}
        onClick={() => {
          window.open(
            "https://github.com/MiguelGarcia98GitHub/birds-data-app",
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <GitHubIcon
          style={{
            fontSize: "2rem",
            color: "white",
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
