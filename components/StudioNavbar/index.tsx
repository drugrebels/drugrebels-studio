import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a
          href="https://drugrebels.dk"  
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ArrowUturnLeftIcon
            style={{ width: "1rem", height: "1rem" }}
          />
          Go to Website
        </a>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
