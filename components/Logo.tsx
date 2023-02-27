import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover"
        width={128}
        height={33}
        src="https://jaysonpostle.digital/static/media/jayson.b6a312d68fda2de29790.png"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
