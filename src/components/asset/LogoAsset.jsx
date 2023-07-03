import Logo from "../png/Logo_of_the_Carrier_Corporation.svg.png"

export default function LogoAsset({width}) {
 return (
<div>
    <img className={`${width}`} src={Logo} alt="메인로고" />
</div>
 )
}