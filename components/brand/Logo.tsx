import { useEffect } from "react";
import { useState } from "react";

export default function Logo(props) {
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => setShowLogo(true), []);

  return !showLogo ? (
    <div {...props} />
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="375pt"
      height="374.999991pt"
      viewBox="0 0 375 374.999991"
      version="1.2"
    >
      <defs>
        <clipPath id="clip1">
          <path d="M 77.699219 141.527344 L 325.023438 141.527344 L 325.023438 325.9375 L 77.699219 325.9375 Z M 77.699219 141.527344 " />
        </clipPath>
        <clipPath id="clip2">
          <path d="M 96.960938 325.859375 L 198.980469 325.859375 C 201.042969 325.867188 203.097656 325.746094 205.140625 325.496094 C 207.1875 325.242188 209.210938 324.863281 211.207031 324.351562 C 213.203125 323.84375 215.164062 323.207031 217.078125 322.449219 C 218.996094 321.6875 220.859375 320.808594 222.664062 319.8125 C 224.46875 318.816406 226.203125 317.707031 227.871094 316.492188 C 229.535156 315.273438 231.117188 313.953125 232.613281 312.53125 C 234.113281 311.113281 235.515625 309.601562 236.820312 308.003906 C 238.128906 306.40625 239.328125 304.730469 240.421875 302.976562 L 322.253906 170.042969 C 329.953125 157.53125 320.722656 141.605469 305.773438 141.605469 L 203.066406 141.605469 C 201.058594 141.597656 199.054688 141.714844 197.058594 141.960938 C 195.066406 142.207031 193.09375 142.578125 191.144531 143.078125 C 189.199219 143.574219 187.289062 144.195312 185.417969 144.933594 C 183.550781 145.675781 181.734375 146.53125 179.972656 147.503906 C 178.214844 148.476562 176.519531 149.558594 174.898438 150.746094 C 173.273438 151.933594 171.730469 153.222656 170.269531 154.605469 C 168.808594 155.992188 167.441406 157.464844 166.167969 159.023438 C 164.894531 160.582031 163.722656 162.214844 162.65625 163.925781 L 80.476562 297.464844 C 72.78125 309.933594 82.019531 325.859375 96.960938 325.859375 Z M 96.960938 325.859375 " />
        </clipPath>
        <linearGradient
          id="linear0"
          gradientUnits="userSpaceOnUse"
          x1="38.139026"
          y1="-31.964257"
          x2="305.621199"
          y2="287.315049"
          gradientTransform="matrix(0.719467,0,0,0.721572,77.701076,141.605647)"
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
            offset="0.257812"
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
            offset="0.554687"
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
              stopColor: "rgb(30.651855%,66.769409%,85.096741%)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.582031"
            style={{
              stopColor: "rgb(30.990601%,67.063904%,85.350037%)",
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
            offset="0.617187"
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
            offset="0.632812"
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
            offset="0.664062"
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
            offset="0.695312"
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
            offset="0.726562"
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
        <clipPath id="clip4">
          <path d="M 0.953125 1.585938 L 248.277344 1.585938 L 248.277344 185.992188 L 0.953125 185.992188 Z M 0.953125 1.585938 " />
        </clipPath>
        <clipPath id="clip5">
          <path d="M 20.214844 185.914062 L 122.234375 185.914062 C 124.292969 185.925781 126.347656 185.804688 128.394531 185.550781 C 130.441406 185.300781 132.460938 184.917969 134.460938 184.410156 C 136.457031 183.898438 138.414062 183.265625 140.332031 182.503906 C 142.25 181.746094 144.109375 180.867188 145.914062 179.871094 C 147.722656 178.871094 149.457031 177.765625 151.121094 176.546875 C 152.789062 175.328125 154.367188 174.007812 155.867188 172.589844 C 157.363281 171.167969 158.765625 169.660156 160.074219 168.0625 C 161.378906 166.460938 162.582031 164.785156 163.675781 163.035156 L 245.507812 30.097656 C 253.207031 17.585938 243.976562 1.664062 229.023438 1.664062 L 126.320312 1.664062 C 124.308594 1.652344 122.308594 1.773438 120.3125 2.019531 C 118.316406 2.265625 116.347656 2.636719 114.398438 3.132812 C 112.449219 3.632812 110.542969 4.25 108.671875 4.992188 C 106.800781 5.734375 104.988281 6.589844 103.226562 7.5625 C 101.464844 8.535156 99.773438 9.613281 98.148438 10.804688 C 96.523438 11.992188 94.984375 13.277344 93.523438 14.664062 C 92.0625 16.046875 90.695312 17.519531 89.417969 19.078125 C 88.144531 20.636719 86.976562 22.273438 85.90625 23.980469 L 3.730469 157.523438 C -3.96875 169.992188 5.269531 185.914062 20.214844 185.914062 Z M 20.214844 185.914062 " />
        </clipPath>
        <linearGradient
          id="linear1"
          gradientUnits="userSpaceOnUse"
          x1="-0.000000000000014211"
          y1="127.68"
          x2="343.760022"
          y2="127.68"
          gradientTransform="matrix(0.719467,0,0,0.721572,0.953033,1.662203)"
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
            offset="0.101563"
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
            offset="0.117188"
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
            offset="0.132813"
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
            offset="0.148438"
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
            offset="0.179688"
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
            offset="0.226563"
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
            offset="0.242188"
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
            offset="0.257813"
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
            offset="0.273438"
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
            offset="0.289063"
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
            offset="0.367188"
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
            offset="0.382813"
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
            offset="0.398438"
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
            offset="0.414063"
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
            offset="0.445313"
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
            offset="0.460938"
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
            offset="0.476563"
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
            offset="0.492188"
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
            offset="0.523438"
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
            offset="0.554688"
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
            offset="0.585938"
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
            offset="0.617188"
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
            offset="0.742188"
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
            offset="0.773438"
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
            offset="0.789063"
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
            offset="0.804688"
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
            offset="0.820313"
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
            offset="0.835938"
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
            offset="0.851563"
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
            offset="0.867188"
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
            offset="0.898438"
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
            offset="0.929688"
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
            offset="0.960938"
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
            offset="0.992188"
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
        <clipPath id="clip3">
          <rect x={0} y={0} width={249} height={187} />
        </clipPath>
        <g id="surface5" clipPath="url(#clip3)">
          <g clipPath="url(#clip4)" clipRule="nonzero">
            <g clipPath="url(#clip5)" clipRule="nonzero">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "url(#linear1)",
                }}
                d="M 0.953125 1.652344 L 0.953125 185.925781 L 248.277344 185.925781 L 248.277344 1.652344 Z M 0.953125 1.652344 "
              />
            </g>
          </g>
        </g>
      </defs>
      <g id="surface1">
        <g clipPath="url(#clip1)" clipRule="nonzero">
          <g clipPath="url(#clip2)" clipRule="nonzero">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "url(#linear0)",
              }}
              d="M 77.699219 141.597656 L 77.699219 325.867188 L 325.023438 325.867188 L 325.023438 141.597656 Z M 77.699219 141.597656 "
            />
          </g>
        </g>
        <use
          xlinkHref="#surface5"
          transform="matrix(1,0,0,1,49,48)"
          mask="url(#mask0)"
        />
      </g>
    </svg>
  );
}
