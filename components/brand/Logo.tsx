import dynamic from "next/dynamic";

const DynamicLogo = dynamic(() => import("@/components/brand/LogoBase"), {
  loading: () => <></>,
});

export default function Logo(props) {
  return (
    <div {...props}>
      <DynamicLogo />
    </div>
  );
}
