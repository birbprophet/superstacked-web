import { useEffect } from "react";
import { useState } from "react";

export default function LogoBackground(props) {
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => setShowLogo(true), []);

  return !showLogo ? (
    <div {...props} />
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 375 375"
      version="1.2"
    >
      <defs>
        <clipPath id="clip1">
          <path d="M 38.628906 38.628906 L 336.378906 38.628906 L 336.378906 336.378906 L 38.628906 336.378906 Z M 38.628906 38.628906 " />
        </clipPath>
        <clipPath id="clip2">
          <path d="M 111.585938 155.714844 L 282.585938 155.714844 L 282.585938 283.214844 L 111.585938 283.214844 Z M 111.585938 155.714844 " />
        </clipPath>
        <clipPath id="clip3">
          <path d="M 124.902344 283.160156 L 195.4375 283.160156 C 196.863281 283.167969 198.285156 283.085938 199.699219 282.910156 C 201.113281 282.734375 202.511719 282.472656 203.890625 282.121094 C 205.273438 281.765625 206.625 281.328125 207.949219 280.804688 C 209.277344 280.277344 210.5625 279.671875 211.8125 278.980469 C 213.058594 278.292969 214.261719 277.527344 215.410156 276.683594 C 216.5625 275.839844 217.65625 274.929688 218.691406 273.949219 C 219.726562 272.964844 220.699219 271.921875 221.601562 270.816406 C 222.503906 269.710938 223.335938 268.554688 224.089844 267.339844 L 280.667969 175.429688 C 285.992188 166.777344 279.609375 155.769531 269.273438 155.769531 L 198.265625 155.769531 C 196.875 155.761719 195.488281 155.84375 194.109375 156.015625 C 192.730469 156.183594 191.367188 156.441406 190.019531 156.785156 C 188.675781 157.128906 187.355469 157.558594 186.0625 158.070312 C 184.769531 158.582031 183.515625 159.175781 182.296875 159.847656 C 181.078125 160.519531 179.910156 161.265625 178.785156 162.089844 C 177.664062 162.910156 176.597656 163.800781 175.585938 164.757812 C 174.578125 165.714844 173.632812 166.730469 172.75 167.808594 C 171.871094 168.886719 171.058594 170.019531 170.324219 171.199219 L 113.503906 263.53125 C 108.183594 272.152344 114.570312 283.160156 124.902344 283.160156 Z M 124.902344 283.160156 " />
        </clipPath>
        <linearGradient
          id="linear0"
          gradientUnits="userSpaceOnUse"
          x1="38.139012"
          y1="-31.964272"
          x2="305.621175"
          y2="287.31502"
          gradientTransform="matrix(0.49744,0,0,0.498896,111.584955,155.768616)"
        >
          <stop
            offset={0}
            style={{
              stopColor: "rgb(1.199341%,41.19873%,63.09967%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.125"
            style={{
              stopColor: "rgb(1.199341%,41.19873%,63.09967%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.1875"
            style={{
              stopColor: "rgb(1.199341%,41.19873%,63.09967%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.21875"
            style={{
              stopColor: "rgb(1.199341%,41.19873%,63.09967%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.234375"
            style={{
              stopColor: "rgb(1.199341%,41.19873%,63.09967%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.242188"
            style={{
              stopColor: "rgb(1.316833%,41.300964%,63.188171%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.246094"
            style={{
              stopColor: "rgb(1.776123%,41.699219%,63.529968%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.25"
            style={{
              stopColor: "rgb(2.116394%,41.995239%,63.783264%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.253906"
            style={{
              stopColor: "rgb(2.455139%,42.289734%,64.03656%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.257813"
            style={{
              stopColor: "rgb(2.79541%,42.585754%,64.291382%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.261719"
            style={{
              stopColor: "rgb(3.134155%,42.880249%,64.544678%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.265625"
            style={{
              stopColor: "rgb(3.474426%,43.174744%,64.7995%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.269531"
            style={{
              stopColor: "rgb(3.813171%,43.469238%,65.052795%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.273438"
            style={{
              stopColor: "rgb(4.153442%,43.765259%,65.306091%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.277344"
            style={{
              stopColor: "rgb(4.493713%,44.059753%,65.559387%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.28125"
            style={{
              stopColor: "rgb(4.833984%,44.354248%,65.814209%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.285156"
            style={{
              stopColor: "rgb(5.172729%,44.648743%,66.067505%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.289062"
            style={{
              stopColor: "rgb(5.513%,44.944763%,66.320801%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.292969"
            style={{
              stopColor: "rgb(5.851746%,45.239258%,66.574097%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.296875"
            style={{
              stopColor: "rgb(6.192017%,45.533752%,66.828918%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.300781"
            style={{
              stopColor: "rgb(6.532288%,45.828247%,67.082214%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.304688"
            style={{
              stopColor: "rgb(6.872559%,46.124268%,67.33551%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.308594"
            style={{
              stopColor: "rgb(7.211304%,46.418762%,67.588806%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.3125"
            style={{
              stopColor: "rgb(7.551575%,46.714783%,67.843628%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.316406"
            style={{
              stopColor: "rgb(7.89032%,47.009277%,68.096924%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.320312"
            style={{
              stopColor: "rgb(8.230591%,47.303772%,68.35022%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.324219"
            style={{
              stopColor: "rgb(8.569336%,47.598267%,68.603516%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.328125"
            style={{
              stopColor: "rgb(8.909607%,47.894287%,68.858337%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.332031"
            style={{
              stopColor: "rgb(9.249878%,48.188782%,69.111633%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.335938"
            style={{
              stopColor: "rgb(9.590149%,48.483276%,69.364929%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.339844"
            style={{
              stopColor: "rgb(9.928894%,48.777771%,69.618225%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.34375"
            style={{
              stopColor: "rgb(10.269165%,49.073792%,69.873047%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.347656"
            style={{
              stopColor: "rgb(10.60791%,49.368286%,70.126343%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.351562"
            style={{
              stopColor: "rgb(10.948181%,49.662781%,70.381165%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.355469"
            style={{
              stopColor: "rgb(11.286926%,49.957275%,70.63446%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.359375"
            style={{
              stopColor: "rgb(11.627197%,50.253296%,70.887756%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.363281"
            style={{
              stopColor: "rgb(11.967468%,50.547791%,71.141052%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.367188"
            style={{
              stopColor: "rgb(12.307739%,50.843811%,71.395874%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.371094"
            style={{
              stopColor: "rgb(12.646484%,51.138306%,71.64917%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.375"
            style={{
              stopColor: "rgb(12.986755%,51.4328%,71.902466%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.378906"
            style={{
              stopColor: "rgb(13.3255%,51.727295%,72.155762%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.382812"
            style={{
              stopColor: "rgb(13.665771%,52.023315%,72.410583%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.386719"
            style={{
              stopColor: "rgb(14.004517%,52.31781%,72.663879%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.390625"
            style={{
              stopColor: "rgb(14.344788%,52.612305%,72.917175%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.394531"
            style={{
              stopColor: "rgb(14.685059%,52.906799%,73.170471%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.398438"
            style={{
              stopColor: "rgb(15.02533%,53.20282%,73.425293%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.402344"
            style={{
              stopColor: "rgb(15.364075%,53.497314%,73.678589%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.40625"
            style={{
              stopColor: "rgb(15.704346%,53.791809%,73.931885%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.410156"
            style={{
              stopColor: "rgb(16.043091%,54.086304%,74.185181%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.414062"
            style={{
              stopColor: "rgb(16.383362%,54.382324%,74.440002%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.417969"
            style={{
              stopColor: "rgb(16.722107%,54.676819%,74.693298%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.421875"
            style={{
              stopColor: "rgb(17.062378%,54.972839%,74.94812%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.425781"
            style={{
              stopColor: "rgb(17.402649%,55.267334%,75.201416%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.429688"
            style={{
              stopColor: "rgb(17.74292%,55.561829%,75.454712%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.433594"
            style={{
              stopColor: "rgb(18.081665%,55.856323%,75.708008%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.4375"
            style={{
              stopColor: "rgb(18.421936%,56.152344%,75.96283%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.441406"
            style={{
              stopColor: "rgb(18.760681%,56.446838%,76.216125%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.445312"
            style={{
              stopColor: "rgb(19.100952%,56.741333%,76.469421%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.449219"
            style={{
              stopColor: "rgb(19.441223%,57.035828%,76.722717%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.453125"
            style={{
              stopColor: "rgb(19.781494%,57.331848%,76.977539%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.457031"
            style={{
              stopColor: "rgb(20.120239%,57.626343%,77.230835%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.460938"
            style={{
              stopColor: "rgb(20.46051%,57.922363%,77.484131%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.464844"
            style={{
              stopColor: "rgb(20.799255%,58.216858%,77.737427%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.46875"
            style={{
              stopColor: "rgb(21.139526%,58.511353%,77.992249%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.472656"
            style={{
              stopColor: "rgb(21.478271%,58.805847%,78.245544%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.476562"
            style={{
              stopColor: "rgb(21.818542%,59.101868%,78.49884%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.480469"
            style={{
              stopColor: "rgb(22.158813%,59.396362%,78.752136%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.484375"
            style={{
              stopColor: "rgb(22.499084%,59.690857%,79.006958%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.488281"
            style={{
              stopColor: "rgb(22.83783%,59.985352%,79.260254%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.492188"
            style={{
              stopColor: "rgb(23.178101%,60.281372%,79.51355%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.496094"
            style={{
              stopColor: "rgb(23.516846%,60.575867%,79.766846%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.5"
            style={{
              stopColor: "rgb(23.857117%,60.870361%,80.021667%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.503906"
            style={{
              stopColor: "rgb(24.195862%,61.164856%,80.274963%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.507812"
            style={{
              stopColor: "rgb(24.536133%,61.460876%,80.529785%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.511719"
            style={{
              stopColor: "rgb(24.876404%,61.755371%,80.783081%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.515625"
            style={{
              stopColor: "rgb(25.216675%,62.051392%,81.036377%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.519531"
            style={{
              stopColor: "rgb(25.55542%,62.345886%,81.289673%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.523438"
            style={{
              stopColor: "rgb(25.895691%,62.640381%,81.544495%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.527344"
            style={{
              stopColor: "rgb(26.234436%,62.934875%,81.797791%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.53125"
            style={{
              stopColor: "rgb(26.574707%,63.230896%,82.051086%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.535156"
            style={{
              stopColor: "rgb(26.913452%,63.525391%,82.304382%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.539062"
            style={{
              stopColor: "rgb(27.253723%,63.819885%,82.559204%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.542969"
            style={{
              stopColor: "rgb(27.593994%,64.11438%,82.8125%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.546875"
            style={{
              stopColor: "rgb(27.934265%,64.4104%,83.065796%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.550781"
            style={{
              stopColor: "rgb(28.27301%,64.704895%,83.319092%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.554688"
            style={{
              stopColor: "rgb(28.613281%,64.99939%,83.573914%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.558594"
            style={{
              stopColor: "rgb(28.952026%,65.293884%,83.827209%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.5625"
            style={{
              stopColor: "rgb(29.292297%,65.589905%,84.080505%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.566406"
            style={{
              stopColor: "rgb(29.631042%,65.884399%,84.333801%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.570312"
            style={{
              stopColor: "rgb(29.971313%,66.18042%,84.588623%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.574219"
            style={{
              stopColor: "rgb(30.311584%,66.474915%,84.841919%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.578125"
            style={{
              stopColor: "rgb(30.651855%,66.769409%,85.095215%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.582031"
            style={{
              stopColor: "rgb(30.990601%,67.063904%,85.348511%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.585938"
            style={{
              stopColor: "rgb(31.330872%,67.359924%,85.603333%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.589844"
            style={{
              stopColor: "rgb(31.669617%,67.654419%,85.856628%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.59375"
            style={{
              stopColor: "rgb(32.009888%,67.948914%,86.11145%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.597656"
            style={{
              stopColor: "rgb(32.350159%,68.243408%,86.364746%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.601562"
            style={{
              stopColor: "rgb(32.69043%,68.539429%,86.618042%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.605469"
            style={{
              stopColor: "rgb(33.029175%,68.833923%,86.871338%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.609375"
            style={{
              stopColor: "rgb(33.369446%,69.128418%,87.12616%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.613281"
            style={{
              stopColor: "rgb(33.708191%,69.422913%,87.379456%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.617188"
            style={{
              stopColor: "rgb(34.048462%,69.718933%,87.632751%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.621094"
            style={{
              stopColor: "rgb(34.387207%,70.013428%,87.886047%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.625"
            style={{
              stopColor: "rgb(34.727478%,70.309448%,88.140869%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.628906"
            style={{
              stopColor: "rgb(35.067749%,70.603943%,88.394165%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.632813"
            style={{
              stopColor: "rgb(35.40802%,70.898438%,88.647461%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.636719"
            style={{
              stopColor: "rgb(35.746765%,71.192932%,88.900757%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.640625"
            style={{
              stopColor: "rgb(36.087036%,71.488953%,89.155579%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.644531"
            style={{
              stopColor: "rgb(36.425781%,71.783447%,89.408875%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.648438"
            style={{
              stopColor: "rgb(36.766052%,72.077942%,89.66217%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.652344"
            style={{
              stopColor: "rgb(37.104797%,72.372437%,89.915466%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.65625"
            style={{
              stopColor: "rgb(37.445068%,72.668457%,90.170288%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.660156"
            style={{
              stopColor: "rgb(37.785339%,72.962952%,90.423584%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.664063"
            style={{
              stopColor: "rgb(38.12561%,73.258972%,90.678406%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.667969"
            style={{
              stopColor: "rgb(38.464355%,73.553467%,90.931702%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.671875"
            style={{
              stopColor: "rgb(38.804626%,73.847961%,91.184998%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.675781"
            style={{
              stopColor: "rgb(39.143372%,74.142456%,91.438293%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.679688"
            style={{
              stopColor: "rgb(39.483643%,74.438477%,91.693115%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.683594"
            style={{
              stopColor: "rgb(39.822388%,74.732971%,91.946411%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.6875"
            style={{
              stopColor: "rgb(40.162659%,75.027466%,92.199707%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.691406"
            style={{
              stopColor: "rgb(40.50293%,75.32196%,92.453003%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.695313"
            style={{
              stopColor: "rgb(40.843201%,75.617981%,92.707825%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.699219"
            style={{
              stopColor: "rgb(41.181946%,75.912476%,92.961121%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.703125"
            style={{
              stopColor: "rgb(41.522217%,76.20697%,93.214417%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.707031"
            style={{
              stopColor: "rgb(41.860962%,76.501465%,93.467712%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.710938"
            style={{
              stopColor: "rgb(42.201233%,76.797485%,93.722534%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.714844"
            style={{
              stopColor: "rgb(42.539978%,77.09198%,93.97583%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.71875"
            style={{
              stopColor: "rgb(42.880249%,77.388%,94.229126%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.722656"
            style={{
              stopColor: "rgb(43.22052%,77.682495%,94.482422%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.726563"
            style={{
              stopColor: "rgb(43.560791%,77.97699%,94.737244%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.730469"
            style={{
              stopColor: "rgb(43.899536%,78.271484%,94.99054%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.734375"
            style={{
              stopColor: "rgb(44.239807%,78.567505%,95.243835%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.738281"
            style={{
              stopColor: "rgb(44.578552%,78.862%,95.497131%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.742188"
            style={{
              stopColor: "rgb(44.918823%,79.156494%,95.751953%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.746094"
            style={{
              stopColor: "rgb(45.259094%,79.450989%,96.005249%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.75"
            style={{
              stopColor: "rgb(45.599365%,79.747009%,96.260071%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.753906"
            style={{
              stopColor: "rgb(45.93811%,80.041504%,96.513367%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.757812"
            style={{
              stopColor: "rgb(46.278381%,80.335999%,96.766663%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.761719"
            style={{
              stopColor: "rgb(46.617126%,80.630493%,97.019958%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.765625"
            style={{
              stopColor: "rgb(46.957397%,80.926514%,97.27478%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.769531"
            style={{
              stopColor: "rgb(47.296143%,81.221008%,97.528076%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.773438"
            style={{
              stopColor: "rgb(47.636414%,81.517029%,97.781372%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.777344"
            style={{
              stopColor: "rgb(47.976685%,81.811523%,98.034668%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.78125"
            style={{
              stopColor: "rgb(48.316956%,82.106018%,98.28949%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.785156"
            style={{
              stopColor: "rgb(48.655701%,82.400513%,98.542786%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.789062"
            style={{
              stopColor: "rgb(48.995972%,82.696533%,98.796082%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.796875"
            style={{
              stopColor: "rgb(48.997498%,82.698059%,98.797607%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.8125"
            style={{
              stopColor: "rgb(48.999023%,82.699585%,98.799133%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.875"
            style={{
              stopColor: "rgb(48.999023%,82.699585%,98.799133%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "rgb(48.999023%,82.699585%,98.799133%)",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <filter
          id="alpha"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feColorMatrix
            type="matrix"
            in="SourceGraphic"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
        </filter>
        <mask id="mask0">
          <g filter="url(#alpha)">
            <rect
              x={0}
              y={0}
              width={375}
              height="374.999991"
              style={{
                fill: "rgb(0%,0%,0%)",
                fillOpacity: 0.8471,
                stroke: "none",
              }}
            />
          </g>
        </mask>
        <clipPath id="clip5">
          <path d="M 0.398438 1.144531 L 171.398438 1.144531 L 171.398438 128.644531 L 0.398438 128.644531 Z M 0.398438 1.144531 " />
        </clipPath>
        <clipPath id="clip6">
          <path d="M 13.714844 128.59375 L 84.253906 128.59375 C 85.679688 128.597656 87.097656 128.515625 88.511719 128.339844 C 89.925781 128.167969 91.324219 127.902344 92.707031 127.550781 C 94.085938 127.199219 95.441406 126.757812 96.765625 126.234375 C 98.089844 125.707031 99.378906 125.101562 100.628906 124.410156 C 101.875 123.722656 103.074219 122.957031 104.226562 122.113281 C 105.378906 121.273438 106.472656 120.359375 107.507812 119.378906 C 108.542969 118.394531 109.511719 117.351562 110.417969 116.246094 C 111.320312 115.140625 112.148438 113.984375 112.90625 112.773438 L 169.484375 20.859375 C 174.808594 12.210938 168.425781 1.199219 158.089844 1.199219 L 87.078125 1.199219 C 85.6875 1.191406 84.304688 1.273438 82.925781 1.445312 C 81.546875 1.613281 80.183594 1.871094 78.835938 2.214844 C 77.488281 2.558594 76.167969 2.988281 74.875 3.5 C 73.585938 4.011719 72.328125 4.605469 71.113281 5.277344 C 69.894531 5.949219 68.722656 6.695312 67.601562 7.519531 C 66.480469 8.339844 65.414062 9.230469 64.402344 10.1875 C 63.390625 11.144531 62.445312 12.164062 61.566406 13.242188 C 60.683594 14.320312 59.875 15.449219 59.136719 16.628906 L 2.320312 108.960938 C -3.003906 117.582031 3.382812 128.59375 13.714844 128.59375 Z M 13.714844 128.59375 " />
        </clipPath>
        <linearGradient
          id="linear1"
          gradientUnits="userSpaceOnUse"
          x1="0.000000000000028422"
          y1="127.68"
          x2="343.760013"
          y2="127.68"
          gradientTransform="matrix(0.49744,0,0,0.498896,0.39994,1.198856)"
        >
          <stop
            offset={0}
            style={{
              stopColor: "rgb(48.999023%,82.699585%,98.799133%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.0078125"
            style={{
              stopColor: "rgb(48.828125%,82.629395%,98.770142%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.015625"
            style={{
              stopColor: "rgb(48.48938%,82.487488%,98.712158%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.0234375"
            style={{
              stopColor: "rgb(48.149109%,82.347107%,98.654175%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.03125"
            style={{
              stopColor: "rgb(47.808838%,82.206726%,98.596191%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.0390625"
            style={{
              stopColor: "rgb(47.470093%,82.066345%,98.539734%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.046875"
            style={{
              stopColor: "rgb(47.129822%,81.925964%,98.48175%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.0546875"
            style={{
              stopColor: "rgb(46.789551%,81.785583%,98.423767%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.0625"
            style={{
              stopColor: "rgb(46.44928%,81.643677%,98.365784%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.0703125"
            style={{
              stopColor: "rgb(46.110535%,81.503296%,98.3078%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.078125"
            style={{
              stopColor: "rgb(45.770264%,81.362915%,98.249817%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.0859375"
            style={{
              stopColor: "rgb(45.429993%,81.222534%,98.191833%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.09375"
            style={{
              stopColor: "rgb(45.089722%,81.082153%,98.13385%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.101562"
            style={{
              stopColor: "rgb(44.750977%,80.941772%,98.075867%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.109375"
            style={{
              stopColor: "rgb(44.410706%,80.801392%,98.019409%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.117187"
            style={{
              stopColor: "rgb(44.070435%,80.659485%,97.961426%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.125"
            style={{
              stopColor: "rgb(43.731689%,80.519104%,97.903442%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.132812"
            style={{
              stopColor: "rgb(43.391418%,80.378723%,97.845459%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.140625"
            style={{
              stopColor: "rgb(43.051147%,80.238342%,97.787476%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.148437"
            style={{
              stopColor: "rgb(42.710876%,80.097961%,97.729492%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.15625"
            style={{
              stopColor: "rgb(42.372131%,79.957581%,97.671509%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.164062"
            style={{
              stopColor: "rgb(42.03186%,79.815674%,97.613525%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.171875"
            style={{
              stopColor: "rgb(41.691589%,79.675293%,97.555542%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.179687"
            style={{
              stopColor: "rgb(41.352844%,79.534912%,97.499084%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.1875"
            style={{
              stopColor: "rgb(41.012573%,79.394531%,97.441101%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.195312"
            style={{
              stopColor: "rgb(40.672302%,79.25415%,97.383118%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.203125"
            style={{
              stopColor: "rgb(40.332031%,79.11377%,97.325134%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.210938"
            style={{
              stopColor: "rgb(39.993286%,78.971863%,97.267151%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.21875"
            style={{
              stopColor: "rgb(39.653015%,78.831482%,97.209167%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.226562"
            style={{
              stopColor: "rgb(39.312744%,78.691101%,97.151184%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.234375"
            style={{
              stopColor: "rgb(38.973999%,78.55072%,97.093201%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.242187"
            style={{
              stopColor: "rgb(38.633728%,78.410339%,97.035217%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.25"
            style={{
              stopColor: "rgb(38.293457%,78.269958%,96.97876%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.257812"
            style={{
              stopColor: "rgb(37.953186%,78.128052%,96.920776%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.265625"
            style={{
              stopColor: "rgb(37.614441%,77.987671%,96.862793%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.273437"
            style={{
              stopColor: "rgb(37.27417%,77.84729%,96.80481%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.28125"
            style={{
              stopColor: "rgb(36.933899%,77.706909%,96.746826%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.289062"
            style={{
              stopColor: "rgb(36.593628%,77.566528%,96.688843%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.296875"
            style={{
              stopColor: "rgb(36.254883%,77.426147%,96.630859%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.304688"
            style={{
              stopColor: "rgb(35.914612%,77.285767%,96.572876%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.3125"
            style={{
              stopColor: "rgb(35.574341%,77.14386%,96.514893%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.320312"
            style={{
              stopColor: "rgb(35.235596%,77.003479%,96.458435%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.328125"
            style={{
              stopColor: "rgb(34.895325%,76.863098%,96.400452%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.335938"
            style={{
              stopColor: "rgb(34.555054%,76.722717%,96.342468%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.34375"
            style={{
              stopColor: "rgb(34.214783%,76.582336%,96.284485%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.351562"
            style={{
              stopColor: "rgb(33.876038%,76.441956%,96.226501%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.359375"
            style={{
              stopColor: "rgb(33.535767%,76.300049%,96.168518%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.367187"
            style={{
              stopColor: "rgb(33.195496%,76.159668%,96.110535%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.375"
            style={{
              stopColor: "rgb(32.85675%,76.019287%,96.052551%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.382812"
            style={{
              stopColor: "rgb(32.516479%,75.878906%,95.994568%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.390625"
            style={{
              stopColor: "rgb(32.176208%,75.738525%,95.93811%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.398437"
            style={{
              stopColor: "rgb(31.835938%,75.598145%,95.880127%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.40625"
            style={{
              stopColor: "rgb(31.497192%,75.456238%,95.822144%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.414062"
            style={{
              stopColor: "rgb(31.156921%,75.315857%,95.76416%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.421875"
            style={{
              stopColor: "rgb(30.81665%,75.175476%,95.706177%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.429688"
            style={{
              stopColor: "rgb(30.477905%,75.035095%,95.648193%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.4375"
            style={{
              stopColor: "rgb(30.137634%,74.894714%,95.59021%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.445312"
            style={{
              stopColor: "rgb(29.797363%,74.754333%,95.532227%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.453125"
            style={{
              stopColor: "rgb(29.457092%,74.612427%,95.474243%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.460937"
            style={{
              stopColor: "rgb(29.118347%,74.472046%,95.417786%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.46875"
            style={{
              stopColor: "rgb(28.778076%,74.331665%,95.359802%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.476562"
            style={{
              stopColor: "rgb(28.437805%,74.191284%,95.301819%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.484375"
            style={{
              stopColor: "rgb(28.097534%,74.050903%,95.243835%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.492187"
            style={{
              stopColor: "rgb(27.758789%,73.910522%,95.185852%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.5"
            style={{
              stopColor: "rgb(27.418518%,73.770142%,95.127869%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.507812"
            style={{
              stopColor: "rgb(27.078247%,73.628235%,95.069885%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.515625"
            style={{
              stopColor: "rgb(26.739502%,73.487854%,95.011902%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.523437"
            style={{
              stopColor: "rgb(26.399231%,73.347473%,94.953918%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.53125"
            style={{
              stopColor: "rgb(26.05896%,73.207092%,94.897461%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.539062"
            style={{
              stopColor: "rgb(25.718689%,73.066711%,94.839478%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.546875"
            style={{
              stopColor: "rgb(25.379944%,72.926331%,94.781494%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.554687"
            style={{
              stopColor: "rgb(25.039673%,72.784424%,94.723511%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.5625"
            style={{
              stopColor: "rgb(24.699402%,72.644043%,94.665527%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.570312"
            style={{
              stopColor: "rgb(24.360657%,72.503662%,94.607544%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.578125"
            style={{
              stopColor: "rgb(24.020386%,72.363281%,94.549561%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.585937"
            style={{
              stopColor: "rgb(23.680115%,72.2229%,94.491577%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.59375"
            style={{
              stopColor: "rgb(23.339844%,72.08252%,94.433594%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.601562"
            style={{
              stopColor: "rgb(23.001099%,71.940613%,94.377136%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.609375"
            style={{
              stopColor: "rgb(22.660828%,71.800232%,94.319153%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.617187"
            style={{
              stopColor: "rgb(22.320557%,71.659851%,94.261169%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.625"
            style={{
              stopColor: "rgb(21.981812%,71.51947%,94.203186%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.632812"
            style={{
              stopColor: "rgb(21.641541%,71.379089%,94.145203%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.640625"
            style={{
              stopColor: "rgb(21.30127%,71.238708%,94.087219%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.648437"
            style={{
              stopColor: "rgb(20.960999%,71.096802%,94.029236%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.65625"
            style={{
              stopColor: "rgb(20.622253%,70.956421%,93.971252%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.664062"
            style={{
              stopColor: "rgb(20.281982%,70.81604%,93.913269%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.671875"
            style={{
              stopColor: "rgb(19.941711%,70.675659%,93.856812%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.679687"
            style={{
              stopColor: "rgb(19.60144%,70.535278%,93.798828%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.6875"
            style={{
              stopColor: "rgb(19.262695%,70.394897%,93.740845%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.695312"
            style={{
              stopColor: "rgb(18.922424%,70.254517%,93.682861%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.703125"
            style={{
              stopColor: "rgb(18.582153%,70.11261%,93.624878%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.710937"
            style={{
              stopColor: "rgb(18.243408%,69.972229%,93.566895%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.71875"
            style={{
              stopColor: "rgb(17.903137%,69.831848%,93.508911%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.726562"
            style={{
              stopColor: "rgb(17.562866%,69.691467%,93.450928%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.734375"
            style={{
              stopColor: "rgb(17.222595%,69.551086%,93.392944%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.742187"
            style={{
              stopColor: "rgb(16.88385%,69.410706%,93.336487%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.75"
            style={{
              stopColor: "rgb(16.543579%,69.268799%,93.278503%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.757812"
            style={{
              stopColor: "rgb(16.203308%,69.128418%,93.22052%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.765625"
            style={{
              stopColor: "rgb(15.864563%,68.988037%,93.162537%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.773437"
            style={{
              stopColor: "rgb(15.524292%,68.847656%,93.104553%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.78125"
            style={{
              stopColor: "rgb(15.184021%,68.707275%,93.04657%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.789062"
            style={{
              stopColor: "rgb(14.84375%,68.566895%,92.988586%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.796875"
            style={{
              stopColor: "rgb(14.505005%,68.424988%,92.930603%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.804687"
            style={{
              stopColor: "rgb(14.164734%,68.284607%,92.87262%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.8125"
            style={{
              stopColor: "rgb(13.824463%,68.144226%,92.816162%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.820312"
            style={{
              stopColor: "rgb(13.485718%,68.003845%,92.758179%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.828125"
            style={{
              stopColor: "rgb(13.145447%,67.863464%,92.700195%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.835937"
            style={{
              stopColor: "rgb(12.805176%,67.723083%,92.642212%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.84375"
            style={{
              stopColor: "rgb(12.464905%,67.581177%,92.584229%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.851562"
            style={{
              stopColor: "rgb(12.12616%,67.440796%,92.526245%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.859375"
            style={{
              stopColor: "rgb(11.785889%,67.300415%,92.468262%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.867187"
            style={{
              stopColor: "rgb(11.445618%,67.160034%,92.410278%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.875"
            style={{
              stopColor: "rgb(11.105347%,67.019653%,92.352295%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.882812"
            style={{
              stopColor: "rgb(10.766602%,66.879272%,92.295837%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.890625"
            style={{
              stopColor: "rgb(10.426331%,66.738892%,92.237854%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.898437"
            style={{
              stopColor: "rgb(10.08606%,66.596985%,92.179871%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.90625"
            style={{
              stopColor: "rgb(9.747314%,66.456604%,92.121887%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.914062"
            style={{
              stopColor: "rgb(9.407043%,66.316223%,92.063904%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.921875"
            style={{
              stopColor: "rgb(9.066772%,66.175842%,92.00592%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.929687"
            style={{
              stopColor: "rgb(8.726501%,66.035461%,91.947937%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.9375"
            style={{
              stopColor: "rgb(8.387756%,65.895081%,91.889954%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.945312"
            style={{
              stopColor: "rgb(8.047485%,65.753174%,91.833496%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.953125"
            style={{
              stopColor: "rgb(7.707214%,65.612793%,91.775513%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.960937"
            style={{
              stopColor: "rgb(7.368469%,65.472412%,91.717529%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.96875"
            style={{
              stopColor: "rgb(7.028198%,65.332031%,91.659546%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.976562"
            style={{
              stopColor: "rgb(6.687927%,65.19165%,91.601562%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.984375"
            style={{
              stopColor: "rgb(6.347656%,65.05127%,91.543579%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.992187"
            style={{
              stopColor: "rgb(6.008911%,64.909363%,91.485596%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "rgb(5.66864%,64.768982%,91.427612%)",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <clipPath id="clip4">
          <rect x={0} y={0} width={172} height={130} />
        </clipPath>
        <g id="surface5" clipPath="url(#clip4)">
          <g clipPath="url(#clip5)" clipRule="nonzero">
            <g clipPath="url(#clip6)" clipRule="nonzero">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "url(#linear1)",
                }}
                d="M 0.398438 1.191406 L 0.398438 128.597656 L 171.398438 128.597656 L 171.398438 1.191406 Z M 0.398438 1.191406 "
              />
            </g>
          </g>
        </g>
      </defs>
      <g id="surface1">
        <g clipPath="url(#clip1)" clipRule="nonzero">
          <path
            style={{
              stroke: "none",
              fillRule: "nonzero",
              fill: "rgb(96.859741%,96.859741%,96.859741%)",
              fillOpacity: 1,
            }}
            d="M 100.253906 38.628906 L 274.765625 38.628906 C 276.785156 38.628906 278.796875 38.726562 280.804688 38.925781 C 282.8125 39.121094 284.808594 39.417969 286.789062 39.8125 C 288.765625 40.207031 290.722656 40.695312 292.652344 41.28125 C 294.585938 41.867188 296.484375 42.546875 298.347656 43.320312 C 300.210938 44.089844 302.035156 44.953125 303.816406 45.90625 C 305.59375 46.855469 307.324219 47.890625 309.003906 49.011719 C 310.679688 50.136719 312.300781 51.335938 313.859375 52.617188 C 315.417969 53.894531 316.914062 55.25 318.339844 56.675781 C 319.765625 58.105469 321.121094 59.597656 322.402344 61.160156 C 323.683594 62.71875 324.882812 64.335938 326.003906 66.015625 C 327.125 67.695312 328.160156 69.421875 329.113281 71.203125 C 330.066406 72.984375 330.925781 74.804688 331.699219 76.667969 C 332.472656 78.535156 333.148438 80.433594 333.734375 82.363281 C 334.320312 84.296875 334.8125 86.25 335.207031 88.230469 C 335.597656 90.210938 335.894531 92.203125 336.09375 94.210938 C 336.289062 96.21875 336.390625 98.234375 336.390625 100.253906 L 336.390625 274.765625 C 336.390625 276.785156 336.289062 278.796875 336.09375 280.804688 C 335.894531 282.8125 335.597656 284.808594 335.207031 286.789062 C 334.8125 288.765625 334.320312 290.722656 333.734375 292.652344 C 333.148438 294.585938 332.472656 296.484375 331.699219 298.347656 C 330.925781 300.210938 330.066406 302.035156 329.113281 303.816406 C 328.160156 305.59375 327.125 307.324219 326.003906 309.003906 C 324.882812 310.679688 323.683594 312.300781 322.402344 313.859375 C 321.121094 315.417969 319.765625 316.914062 318.339844 318.339844 C 316.914062 319.765625 315.417969 321.121094 313.859375 322.402344 C 312.300781 323.683594 310.679688 324.882812 309.003906 326.003906 C 307.324219 327.125 305.59375 328.160156 303.816406 329.113281 C 302.035156 330.066406 300.210938 330.925781 298.347656 331.699219 C 296.484375 332.472656 294.585938 333.148438 292.652344 333.734375 C 290.722656 334.320312 288.765625 334.8125 286.789062 335.207031 C 284.808594 335.597656 282.8125 335.894531 280.804688 336.09375 C 278.796875 336.289062 276.785156 336.390625 274.765625 336.390625 L 100.253906 336.390625 C 98.234375 336.390625 96.21875 336.289062 94.210938 336.09375 C 92.203125 335.894531 90.210938 335.597656 88.230469 335.207031 C 86.25 334.8125 84.296875 334.320312 82.363281 333.734375 C 80.433594 333.148438 78.535156 332.472656 76.667969 331.699219 C 74.804688 330.925781 72.984375 330.066406 71.203125 329.113281 C 69.421875 328.160156 67.695312 327.125 66.015625 326.003906 C 64.335938 324.882812 62.71875 323.683594 61.160156 322.402344 C 59.597656 321.121094 58.105469 319.765625 56.675781 318.339844 C 55.25 316.914062 53.894531 315.417969 52.617188 313.859375 C 51.335938 312.300781 50.136719 310.679688 49.011719 309.003906 C 47.890625 307.324219 46.855469 305.59375 45.90625 303.816406 C 44.953125 302.035156 44.089844 300.210938 43.320312 298.347656 C 42.546875 296.484375 41.867188 294.585938 41.28125 292.652344 C 40.695312 290.722656 40.207031 288.765625 39.8125 286.789062 C 39.417969 284.808594 39.121094 282.8125 38.925781 280.804688 C 38.726562 278.796875 38.628906 276.785156 38.628906 274.765625 L 38.628906 100.253906 C 38.628906 98.234375 38.726562 96.21875 38.925781 94.210938 C 39.121094 92.203125 39.417969 90.210938 39.8125 88.230469 C 40.207031 86.25 40.695312 84.296875 41.28125 82.363281 C 41.867188 80.433594 42.546875 78.535156 43.320312 76.667969 C 44.089844 74.804688 44.953125 72.984375 45.90625 71.203125 C 46.855469 69.421875 47.890625 67.695312 49.011719 66.015625 C 50.136719 64.335938 51.335938 62.71875 52.617188 61.160156 C 53.894531 59.597656 55.25 58.105469 56.675781 56.675781 C 58.105469 55.25 59.597656 53.894531 61.160156 52.617188 C 62.71875 51.335938 64.335938 50.136719 66.015625 49.011719 C 67.695312 47.890625 69.421875 46.855469 71.203125 45.90625 C 72.984375 44.953125 74.804688 44.089844 76.667969 43.320312 C 78.535156 42.546875 80.433594 41.867188 82.363281 41.28125 C 84.296875 40.695312 86.25 40.207031 88.230469 39.8125 C 90.210938 39.417969 92.203125 39.121094 94.210938 38.925781 C 96.21875 38.726562 98.234375 38.628906 100.253906 38.628906 Z M 100.253906 38.628906 "
          />
        </g>
        <g clipPath="url(#clip2)" clipRule="nonzero">
          <g clipPath="url(#clip3)" clipRule="nonzero">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "url(#linear0)",
              }}
              d="M 111.585938 155.761719 L 111.585938 283.167969 L 282.585938 283.167969 L 282.585938 155.761719 Z M 111.585938 155.761719 "
            />
          </g>
        </g>
        <use
          xlinkHref="#surface5"
          transform="matrix(1,0,0,1,92,91)"
          mask="url(#mask0)"
        />
      </g>
    </svg>
  );
}
