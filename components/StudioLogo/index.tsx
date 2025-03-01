export default function StudioLogo(props: any) {
  return (
    <div className="flex items-center space-x-2">
      <img src="/logo.png" alt="Logo" width={50} height={50} />
      <>{props.renderDefault(props)}</>
    </div>
  );
}
