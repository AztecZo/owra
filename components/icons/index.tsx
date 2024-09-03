interface Props {
  fill?: string
  rotate?: number
}

const IconPointer = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.9999 15.1144C28.0091 16.0471 27.4464 16.8478 26.5656 17.1543L19.5753 19.5919L17.1064 26.5705C16.8001 27.4398 16.0113 28 15.091 28H15.07C14.1405 27.9908 13.3517 27.4147 13.0598 26.5322L7.77218 10.5419C7.51845 9.77298 7.71434 8.93929 8.28227 8.36458C8.85546 7.78591 9.69291 7.58375 10.4686 7.83742L26.526 13.1022C27.4121 13.3916 27.9907 14.1816 27.9999 15.1144ZM4.17141 2.65957C3.75859 2.24869 3.09207 2.25133 2.6845 2.66617C2.27566 3.08104 2.27828 3.75086 2.69108 4.16177L4.64074 6.10261C4.84583 6.30739 5.1127 6.40912 5.3809 6.40912C5.65172 6.40912 5.92255 6.30475 6.12765 6.096C6.5365 5.68113 6.53387 5.01263 6.12107 4.60172L4.17141 2.65957ZM9.15546 4.85935C9.73656 4.85935 10.2072 4.38637 10.2072 3.80239V1.05695C10.2072 0.472974 9.73656 0 9.15546 0C8.57436 0 8.10372 0.472974 8.10372 1.05695V3.80239C8.10372 4.38637 8.57436 4.85935 9.15546 4.85935ZM13.0073 5.94935C13.2742 5.94935 13.5424 5.84761 13.7475 5.64283L15.6972 3.70199C16.11 3.29112 16.1126 2.62258 15.7037 2.20771C15.2949 1.79153 14.6283 1.79021 14.2168 2.20111L12.2672 4.14194C11.8543 4.55282 11.8517 5.22136 12.2606 5.63622C12.4657 5.84497 12.7365 5.94935 13.0073 5.94935ZM4.86034 9.1268C4.86034 8.54282 4.3897 8.06985 3.8086 8.06985H1.05174C0.47064 8.06985 0 8.54282 0 9.1268C0 9.71078 0.47064 10.1838 1.05174 10.1838H3.8086C4.3897 10.1838 4.86034 9.71078 4.86034 9.1268ZM4.16357 12.2118L2.2139 14.1539C1.80108 14.5648 1.79845 15.2347 2.20732 15.6482C2.41373 15.857 2.68325 15.9613 2.95407 15.9613C3.22227 15.9613 3.48913 15.8596 3.69423 15.6548L5.6439 13.7127C6.05671 13.3018 6.05934 12.6333 5.65047 12.2184C5.24162 11.8022 4.57507 11.7996 4.16357 12.2118Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconOwraLogo = (props: Props) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1409 367" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 191.818C0 100.018 72.859 23.852 164.43 23.852C256.002 23.852 328.264 100.619 328.264 191.818C328.264 283.017 255.405 359.784 164.43 359.784C73.4562 359.784 0 283.618 0 191.818ZM164.43 270.79C208.624 270.79 240.674 235.113 240.674 191.818C240.674 148.524 208.624 112.846 164.43 112.846C120.237 112.846 86.9929 148.123 86.9929 191.818C86.9929 235.513 120.835 270.79 164.43 270.79Z"
        fill="#FF5B4A"
      />
      <path
        d="M396.544 37.6821L483.139 49.7084C483.139 49.7084 460.246 133.291 454.473 195.226C449.297 251.749 455.668 273.797 466.019 273.797C478.56 273.797 498.666 240.925 514.791 199.836C522.156 180.193 528.527 158.946 532.508 136.898H618.505C622.487 158.345 628.26 178.389 635.625 197.43C652.347 241.326 672.254 272.995 685.392 272.995C696.938 272.995 702.512 248.742 695.744 185.805C689.374 126.275 669.467 53.1158 668.87 52.5145L754.867 37.4817C754.867 38.6843 818.967 258.564 749.692 334.128C739.34 345.754 727.993 353.771 716.447 358.983H715.85C705.498 362.991 695.147 365.396 685.392 365.396C635.625 365.396 596.011 317.492 575.308 276.603C554.007 317.492 516.782 365.396 466.417 365.396C440.14 365.396 418.84 353.37 401.72 334.329C331.847 258.764 396.544 38.8848 396.544 37.6821Z"
        fill="#FF5B4A"
      />
      <path
        d="M911.335 22.0481L911.932 48.1049C934.228 29.0634 962.297 18.0393 995.541 22.6494C1127.32 39.8869 1080.34 240.725 1080.34 241.326L997.731 237.919C997.731 237.919 1019.43 115.051 983.995 110.441C942.788 104.628 915.316 201.038 916.312 236.315L918.701 357.98L831.509 359.784L824.143 23.852L911.335 22.0481Z"
        fill="#FF5B4A"
      />
      <path
        d="M1230.44 132.89C1269.46 128.881 1299.32 136.297 1321.02 145.517C1318.63 119.46 1303.9 95.8089 1278.02 89.5953C1252.14 83.7826 1232.23 99.4167 1220.69 121.866L1142.25 82.58C1167.54 32.4708 1213.92 0 1267.27 0C1348.09 0 1405.42 67.5472 1408.21 147.121C1410.6 206.65 1407.02 273.596 1404.83 320.298C1403.63 345.152 1404.83 357.179 1404.83 364.194L1317.63 367C1317.04 357.78 1315.84 349.161 1317.04 330.12C1290.76 349.161 1265.48 360.786 1232.83 360.786C1177.29 360.786 1132.5 323.906 1123.94 264.978C1114.78 196.829 1161.76 140.306 1230.64 132.89H1230.44ZM1241.99 271.993C1284.39 275.4 1325 202.642 1238.6 213.666C1197.4 218.877 1201.38 280.01 1241.99 271.993Z"
        fill="#FF5B4A"
      />
    </svg>
  )
}

const IconStar = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 68 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M29.3931 64C23.8957 59.7829 24.0207 54.2015 23.8957 48.7442C23.8957 39.6899 22.6463 38.4496 13.7755 40.186C10.527 40.8062 7.40346 41.4264 4.15498 41.3023C2.15592 41.3023 0.406743 40.8062 0.0319186 38.4496C-0.217964 36.4651 1.03145 35.2248 2.65569 34.9767C10.0272 33.6124 14.5251 28.031 20.1475 23.3178C16.6491 17.6124 14.2752 11.5349 13.1508 4.46512C17.8985 3.84496 21.147 6.69767 24.1456 9.05426C27.3941 11.6589 31.0174 13.6434 34.7656 15.7519C39.7633 11.5349 40.0131 3.84496 46.76 0C48.759 6.69767 47.5096 13.1473 48.3842 19.4729C54.8812 21.9535 60.7534 15.6279 68 18.3566C64.2518 22.4496 61.7529 26.2946 57.38 28.7752C52.5073 31.3798 50.6332 34.4806 55.0061 40.3101C58.0047 44.2791 63.1273 47.7519 63.2522 54.4496C57.1301 54.4496 52.0075 53.3333 47.5096 50.3566C41.6374 46.2636 38.3889 48.2481 36.015 54.2016C34.6407 57.6744 33.0164 61.0233 29.3931 64Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconSpotify = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0C9.04348 0 0 9.04348 0 20C0 30.9565 9.04348 40 20 40C30.9565 40 40 30.9565 40 20C40 9.04348 30.9565 0 20 0ZM28.6957 27.6522C28.5217 28 28.1739 28 28 28C27.8261 28 27.6522 28 27.4783 27.8261C23.3043 25.2174 17.7391 24.6957 11.3043 26.087C10.7826 26.2609 10.4348 25.913 10.2609 25.3913C10.087 24.8696 10.4348 24.5217 10.9565 24.3478C17.913 22.7826 23.8261 23.4783 28.5217 26.2609C28.8696 26.6087 28.8696 27.1304 28.6957 27.6522ZM30.6087 22.4348C30.4348 22.7826 30.087 22.7826 29.913 22.7826C29.7391 22.7826 29.5652 22.7826 29.3913 22.6087C24.3478 19.4783 16.8696 18.6087 10.9565 20.5217C10.4348 20.6957 10.087 20.3478 9.91304 20C9.73913 19.4783 10.087 19.1304 10.4348 18.9565C16.6957 17.0435 24.6957 17.913 30.2609 21.2174C30.7826 21.5652 30.7826 22.087 30.6087 22.4348ZM32.8696 16.5217C32.6957 16.8696 32.3478 16.8696 32.1739 16.8696C32 16.8696 31.8261 16.8696 31.8261 16.6957C25.7391 13.3913 15.8261 13.0435 10.087 14.7826C9.73913 14.9565 9.21739 14.6087 9.04348 14.2609C8.86957 13.7391 9.21739 13.2174 9.56522 13.0435C15.6522 11.3043 26.087 11.6522 32.5217 15.4783C32.8696 15.6522 33.0435 16.1739 32.8696 16.5217Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconBag = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM23 12.1053V14.2105H17V12.1053H23ZM25 14.2105H28C29.104 14.2105 30 15.1537 30 16.3158V27.8947C30 29.0558 29.104 30 28 30H12C10.896 30 10 29.0558 10 27.8947V16.3158C10 15.1537 10.896 14.2105 12 14.2105H15V12.1053C15 10.9432 15.896 10 17 10H23C24.104 10 25 10.9432 25 12.1053V14.2105Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconLinkedin = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8.75323 10.2097V17.5293H6.49095V10.2097H8.75323ZM7.59402 6.46154C8.30321 6.46154 8.73976 6.96026 8.75323 7.61529C8.75323 8.25608 8.30321 8.76923 7.58036 8.76923H7.56689C6.87118 8.76923 6.42115 8.25608 6.42115 7.61529C6.42115 6.96026 6.88465 6.46154 7.59402 6.46154ZM12.444 13.3589V17.5293H10.1702C10.1702 17.5293 10.2029 10.8663 10.1702 10.1656H12.4438L12.4274 11.1445C12.7538 10.6349 13.3416 9.88627 14.6808 9.88627C16.314 9.88627 17.5385 10.9536 17.5385 13.2474V17.5293H15.2609V13.3589C15.2609 12.3553 14.6976 11.8455 13.7993 11.8455C13.1136 11.8455 12.7052 12.3073 12.5258 12.7535C12.4601 12.9126 12.444 13.1358 12.444 13.3589Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconPin = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM22.5033 17.1153C22.5033 18.4175 21.3824 19.4731 19.9999 19.4731C18.6174 19.4731 17.4967 18.4175 17.4967 17.1153C17.4967 15.8131 18.6174 14.7574 19.9999 14.7574C21.3825 14.7574 22.5033 15.8131 22.5033 17.1153ZM13.745 17.1152C13.745 13.8613 16.5454 11.2236 19.9999 11.2236C23.4545 11.2236 26.2549 13.8614 26.2549 17.1152C26.2549 18.7015 25.5892 20.1411 24.5067 21.2003C24.1994 20.7321 23.7747 20.2857 23.1886 19.943C23.9272 19.2044 24.3807 18.21 24.3807 17.1152C24.3807 14.8363 22.4194 12.9889 19.9999 12.9889C17.5805 12.9889 15.6192 14.8363 15.6192 17.1152C15.6192 18.2076 16.0707 19.2001 16.8065 19.9383C16.2194 20.2798 15.7936 20.7251 15.4852 21.1926C14.4075 20.1342 13.745 18.6976 13.745 17.1152ZM10 17.1153C10 11.9133 14.4771 7.69615 19.9999 7.69615C25.5228 7.69615 29.9999 11.9132 30 17.1153C30 20.5157 28.0867 23.495 25.219 25.1509C25.2766 24.7405 25.3134 24.2996 25.3134 23.8427C25.3134 23.8427 25.316 23.4961 25.2178 22.9945C27.0012 21.5888 28.1358 19.477 28.1358 17.1153C28.1358 12.883 24.4933 9.45217 20 9.45217C15.5067 9.45217 11.8643 12.883 11.8643 17.1153C11.8643 19.472 12.994 21.5798 14.7709 22.9855C14.6707 23.492 14.6735 23.8428 14.6735 23.8428C14.6735 24.2965 14.71 24.7345 14.7669 25.1427C11.9071 23.485 10 20.5101 10 17.1153ZM16.5579 23.8942C16.5579 22.1036 18.099 20.6521 19.9999 20.6521C21.9009 20.6521 23.442 22.1036 23.442 23.8942C23.442 25.6847 21.9009 31.5423 19.9999 31.5423C18.0989 31.5423 16.5579 25.6847 16.5579 23.8942Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconHouse = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM29.6552 26.8519C29.8455 26.8519 30 27.0178 30 27.2222V29.6296C30 29.8341 29.8455 30 29.6552 30H10.3448C10.1545 30 10 29.8341 10 29.6296V27.2222C10 27.0178 10.1545 26.8519 10.3448 26.8519H29.6552ZM12.5862 26.4815H15.6324V18.889H12.5862V26.4815ZM16.5131 26.4815H19.5593V18.889H16.5131V26.4815ZM20.4407 26.4815H23.4869V18.889H20.4407V26.4815ZM24.3676 26.4815H27.4138V18.889H24.3676V26.4815ZM19.7862 10.0794C19.9117 9.97352 20.0883 9.97352 20.2138 10.0794L29.3945 17.8571C29.5097 17.9549 29.5552 18.1208 29.5069 18.2697C29.4586 18.4186 29.3276 18.5186 29.1807 18.5186H10.8186C10.6724 18.5186 10.5414 18.4186 10.4931 18.2697C10.4448 18.1208 10.4903 17.9549 10.6055 17.8571L19.7862 10.0794Z"
          fill="#052414"
        />
      </svg>
    </span>
  )
}

const IconGoogleScholar = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.6021 23.9998H11.4206C11.3873 23.993 11.3539 23.9828 11.3201 23.9799C11.1241 23.963 10.9276 23.951 10.732 23.9316C9.96572 23.8548 9.21487 23.7002 8.47948 23.4721C6.56543 22.8783 4.9015 21.8695 3.49155 20.4456C2.0816 19.0217 1.08933 17.3465 0.514244 15.4264C0.251569 14.5504 0.0946403 13.6546 0.0420087 12.741C0.0366972 12.6453 0.0144858 12.5511 0 12.4564C0 12.1549 0 11.8539 0 11.5524C0.0149686 11.4499 0.0371801 11.348 0.0429744 11.2446C0.0825688 10.572 0.178658 9.90815 0.335104 9.25345C0.8648 7.03571 1.92709 5.1098 3.54756 3.50713C5.73684 1.34157 8.38098 0.183896 11.4539 0.0162363C12.3506 -0.0325637 13.2429 0.0316977 14.1284 0.190177C15.268 0.394074 16.3578 0.749686 17.3882 1.27586C19.7953 2.50504 21.605 4.33142 22.7962 6.75982C23.5263 8.24846 23.9314 9.82359 23.9797 11.4862C23.9812 11.5316 23.9932 11.5765 24 11.6215V12.3631C23.9928 12.4313 23.9826 12.4989 23.9783 12.5675C23.9594 12.841 23.9527 13.1154 23.9218 13.3874C23.8247 14.2417 23.6446 15.0785 23.3563 15.8893C22.2419 19.027 20.1912 21.3394 17.2091 22.8145C15.7948 23.5142 14.2897 23.8901 12.7137 23.9799C12.676 23.9819 12.6398 23.993 12.6021 23.9998ZM8.3858 8.66785C8.38967 8.71521 8.39208 8.74178 8.39353 8.76884C8.40415 9.0283 8.43699 9.28438 8.50169 9.53563C8.77837 10.6054 9.42009 11.3451 10.4737 11.7075C10.9416 11.8684 11.4268 11.9292 11.9203 11.9292C12.0005 11.9292 12.0806 11.9292 12.1724 11.9292C12.1564 11.9809 12.1449 12.021 12.1318 12.0602C12.0478 12.3201 12.0082 12.5849 12.0338 12.8589C12.0705 13.2526 12.2226 13.5957 12.4732 13.8982C12.4911 13.9194 12.5041 13.945 12.5176 13.9663C12.1825 14.0025 11.8561 14.0325 11.5311 14.0745C10.9102 14.1552 10.3003 14.289 9.70787 14.4944C9.21294 14.6659 8.74215 14.8848 8.32545 15.208C8.03525 15.4332 7.78609 15.697 7.62627 16.0304C7.3042 16.702 7.33752 17.3784 7.63786 18.0452C7.85321 18.523 8.22453 18.8627 8.66683 19.1289C9.06374 19.3676 9.49348 19.5256 9.93964 19.6421C10.5249 19.7947 11.1212 19.8682 11.7243 19.8938C11.9208 19.902 12.1193 19.9097 12.3143 19.8904C12.9005 19.8329 13.4708 19.7 14.0237 19.4961C14.5596 19.298 15.0628 19.0386 15.492 18.655C16.3163 17.9181 16.6045 16.9933 16.4317 15.9154C16.3423 15.3583 16.0816 14.8814 15.7113 14.461C15.3679 14.0711 14.9556 13.7667 14.5075 13.5111C14.2892 13.3865 14.1077 13.2217 13.9392 13.0405C13.6794 12.7617 13.6127 12.4255 13.6852 12.0607C13.7417 11.777 13.9068 11.5514 14.1144 11.361C14.282 11.2074 14.4674 11.0736 14.6412 10.9272C14.818 10.7779 14.9966 10.6295 15.1637 10.4696C15.4322 10.213 15.6099 9.89897 15.7006 9.53852C15.7991 9.14716 15.8054 8.75144 15.7441 8.35428C15.6977 8.05423 15.5973 7.77158 15.4727 7.49569C15.4346 7.41162 15.4017 7.32465 15.3733 7.23671C15.3346 7.11882 15.3646 7.0159 15.4582 6.9328C15.5017 6.89463 15.5447 6.85549 15.5905 6.82022C16.2883 6.28342 16.9865 5.7471 17.6847 5.21127C17.7074 5.19387 17.7339 5.18179 17.7586 5.1673C17.8479 5.33592 17.8551 5.49778 17.7769 5.68815C17.733 5.79493 17.6813 5.89881 17.6292 6.00221C17.5587 6.14233 17.5133 6.28922 17.5089 6.44576C17.5007 6.74678 17.4916 7.04779 17.492 7.3488C17.494 8.29968 17.4157 9.24717 17.3882 10.1971C17.3761 10.6097 17.3911 11.0233 17.3979 11.4359C17.4008 11.6229 17.4674 11.7901 17.5751 11.9418C17.634 12.0249 17.7088 12.081 17.8127 12.0892C17.9396 12.0988 18.0666 12.1099 18.1941 12.1109C18.4215 12.1133 18.5553 12.0133 18.6243 11.7978C18.6673 11.664 18.6789 11.5258 18.6765 11.3862C18.6668 10.7836 18.6606 10.1811 18.6451 9.57911C18.6369 9.25877 18.621 8.93795 18.5929 8.61905C18.549 8.10979 18.5369 7.60102 18.5896 7.09224C18.635 6.65497 18.5683 6.2351 18.3699 5.84325C18.2574 5.62148 18.2289 5.39052 18.2245 5.14845C18.2221 4.98756 18.2728 4.8571 18.3921 4.74694C18.6248 4.53241 18.8532 4.31306 19.0831 4.09563C19.1062 4.07389 19.1265 4.04973 19.1666 4.00721H19.0246C16.1487 4.00721 13.2723 4.00721 10.3964 4.00528C10.3085 4.00528 10.2443 4.03137 10.1801 4.08887C9.73684 4.48555 9.29068 4.87885 8.84597 5.27311C7.60888 6.36894 6.3718 7.46476 5.13472 8.56107C5.10478 8.58765 5.07629 8.61567 5.04732 8.64321C5.0507 8.65143 5.05456 8.65964 5.05794 8.66785H8.3858Z"
          fill={props.fill}
        />
        <path
          d="M12.295 19.2415C11.6354 19.2328 11.0097 19.1033 10.4259 18.8014C9.97296 18.567 9.58523 18.2554 9.30565 17.822C9.08402 17.4789 8.96861 17.1049 8.98648 16.6933C9.00821 16.1942 9.21535 15.7777 9.55625 15.4235C9.96137 15.0027 10.4621 14.7432 11.0222 14.6045C12.0633 14.3465 13.0666 14.4514 14.0179 14.9602C14.4322 15.1819 14.7813 15.4825 15.041 15.8791C15.5167 16.6058 15.4742 17.4664 14.9271 18.1399C14.6021 18.5404 14.1816 18.8052 13.7055 18.9883C13.2501 19.1632 12.775 19.2357 12.295 19.2415Z"
          fill={props.fill}
        />
        <path
          d="M9.91212 8.13589C9.91743 7.73679 9.9831 7.35074 10.1555 6.98884C10.351 6.57863 10.6456 6.26844 11.0806 6.11286C11.4718 5.97274 11.8624 6.00221 12.2477 6.14281C12.6668 6.29598 13.0155 6.55351 13.3134 6.88013C13.8378 7.4551 14.1526 8.13202 14.2714 8.90074C14.3467 9.38971 14.3221 9.87094 14.154 10.3396C14.1154 10.4483 14.0676 10.5551 14.0121 10.6561C13.6282 11.3552 12.9131 11.6548 12.1439 11.4422C11.7248 11.3262 11.3675 11.1016 11.0594 10.8001C10.4056 10.1599 10.0381 9.37811 9.93578 8.47024C9.92323 8.35911 9.91936 8.24701 9.91115 8.1354L9.91212 8.13589Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconImdb = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6.57556 14.9242H7.94083L7.95005 11.1385L8.51276 14.9333C8.55085 14.9304 8.6522 14.9312 8.77605 14.9321C9.04216 14.9342 9.41212 14.937 9.48136 14.906L10.0164 11.0748L10.0349 14.9242H11.3817L11.3909 8.99999H9.37067L9.0109 11.7209L8.60501 9.00909L6.58479 8.99999L6.5838 9.634L6.21236 9.63167C6.17857 9.63543 6.17023 9.63331 6.16591 9.63655C6.16194 9.63952 6.16135 9.647 6.14757 9.66767C6.21499 9.65008 6.38745 9.64443 6.58378 9.64391L6.5765 14.3226C6.3832 14.3206 6.21415 14.3137 6.14757 14.2963C6.15924 14.3197 6.16263 14.33 6.16973 14.3345C6.18014 14.3412 6.19853 14.3353 6.26275 14.3395L6.57648 14.3354L6.57556 14.9242ZM5.77534 14.9175H5.77536L5.77551 14.9175C5.88208 14.9162 5.9716 14.9151 6.0313 14.9151V9.01819C5.96281 9.01819 5.85508 9.01623 5.72736 9.0139L5.72708 9.0139L5.72625 9.01388L5.72617 9.01388H5.72613H5.72611C5.30338 9.00618 4.66277 8.9945 4.49999 9.03639V14.8878C4.66922 14.9313 5.35494 14.9228 5.77534 14.9175ZM14.2967 14.8969C14.6011 14.9242 14.9424 14.7968 15.1177 14.6421C15.5226 14.303 15.4846 13.0092 15.4596 12.1558L15.4596 12.1556C15.4544 11.9785 15.4498 11.8203 15.4498 11.6936C15.4498 11.6072 15.4512 11.5072 15.4528 11.3986L15.4528 11.3984V11.3984C15.4609 10.8328 15.4724 10.0322 15.3022 9.6734C15.2977 9.66424 15.2929 9.65513 15.2879 9.64607H15.9941V11.9939C15.9941 12.0784 15.9922 12.2396 15.9898 12.4449L15.9898 12.4451V12.4452V12.4452C15.9803 13.257 15.9628 14.7572 16.0217 14.9242H17.3685L17.47 14.5602C17.5251 14.5964 17.566 14.6392 17.6086 14.6839C17.716 14.7963 17.8343 14.9202 18.2172 14.9788C18.6139 15.0425 18.8999 14.9606 19.1397 14.7604C19.5244 14.4506 19.5082 13.7057 19.4948 13.0924L19.4948 13.0921C19.4925 12.9849 19.4902 12.8818 19.4902 12.7857C19.4902 12.4035 19.4902 12.0121 19.481 11.6299C19.4718 11.2113 19.4441 10.9838 19.1858 10.7472C18.9737 10.5561 18.6231 10.4833 18.2726 10.5106C17.9114 10.532 17.7652 10.6427 17.5991 10.7683L17.5991 10.7683C17.5531 10.8031 17.5056 10.8391 17.4516 10.8746L17.4239 10.911V9.00909H15.9941V9.62211C15.7733 9.61786 15.4693 9.61749 15.2758 9.62481C15.0378 9.22194 14.382 8.93102 13.7432 9.02729L11.9352 9.00909V9.66992L11.928 14.3251L11.9352 14.3266V14.9151H13.1344L14.2967 14.8969ZM13.4757 13.8868C13.7248 13.8959 13.8724 13.8595 13.9185 13.6502C13.9805 13.3748 13.9708 11.8582 13.9662 11.1278C13.9653 10.9893 13.9646 10.8791 13.9646 10.8109C13.9646 10.7543 13.9657 10.6997 13.9668 10.6475C13.9751 10.2546 13.9805 9.99511 13.4757 10.0192V13.8868ZM17.9866 11.5389C18.042 11.73 18.0512 13.8322 17.9405 14.0597C17.9289 14.0682 17.9228 14.075 17.9172 14.0811C17.9052 14.0945 17.896 14.1046 17.839 14.1234C17.477 14.2714 17.4784 13.8276 17.4792 13.5739L17.4792 13.541C17.4792 13.4996 17.4778 13.4241 17.4758 13.3253C17.465 12.7715 17.4398 11.4874 17.5807 11.4024C17.7283 11.3114 17.9405 11.3842 17.9866 11.5389Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconPen = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.5019 7.12576V6.00084L10.501 6C14.6449 6 18.0038 9.35736 18.0038 13.4995H16.8784C16.8784 12.6384 16.7105 11.8036 16.378 11.0185C16.0568 10.2596 15.5972 9.57812 15.0111 8.99223C14.4254 8.40677 13.7431 7.94696 12.9839 7.62589C12.1984 7.29449 11.3633 7.12576 10.5019 7.12576ZM10.5018 8.25068V9.3756C11.6038 9.3756 12.6401 9.80447 13.4195 10.5839C14.1989 11.3629 14.6284 12.3988 14.6284 13.5003H15.7538C15.7538 10.6008 13.4026 8.25068 10.5018 8.25068ZM10.877 11.2505L11.6273 10.5005L13.503 12.3754L12.7527 13.1253L12.0024 15.7502L7.1256 18L6.8283 17.7028L9.55787 14.9745C9.61976 14.9909 9.68448 14.9998 9.752 14.9998C10.1661 14.9998 10.5023 14.6637 10.5023 14.2498C10.5023 13.836 10.1661 13.4999 9.752 13.4999C9.33795 13.4999 9.00173 13.836 9.00173 14.2498C9.00173 14.3173 9.01064 14.3815 9.02705 14.4439L6.29748 17.1722L6.00017 16.8751L8.25101 12.0004L10.877 11.2505Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconVimeo = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C5.37246 0 0 5.37267 0 11.9998C0 18.6273 5.37246 24 12 24C18.6271 24 24 18.6274 24 11.9998C24 5.37267 18.6271 0 12 0ZM19.0355 8.72612C18.9714 10.0987 18.0153 11.9757 16.1638 14.3594C14.2499 16.8479 12.6269 18.0924 11.3017 18.0924C10.4815 18.0924 9.78577 17.3332 9.2204 15.814C8.84086 14.422 8.46051 13.0299 8.08274 11.6374C7.66194 10.1186 7.20926 9.35932 6.72394 9.35932C6.62109 9.35932 6.25109 9.58063 5.62029 10.0236L4.9572 9.16999C5.65211 8.55833 6.33669 7.94575 7.01091 7.33409C7.93686 6.53303 8.63006 6.11117 9.09263 6.06803C10.1868 5.96279 10.8593 6.71252 11.1141 8.31502C11.3855 10.0457 11.5758 11.121 11.6811 11.543C11.9974 12.9773 12.3438 13.6947 12.7245 13.6947C13.0176 13.6947 13.459 13.2309 14.0494 12.3026C14.6381 11.3743 14.9538 10.6677 14.9951 10.182C15.0799 9.37966 14.7641 8.97928 14.0494 8.97928C13.7107 8.97928 13.3635 9.05392 13.0064 9.20104C13.7005 6.94367 15.0261 5.84719 16.983 5.90969C18.4361 5.95242 19.1206 6.89108 19.0355 8.72612Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconPhotoBucket = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.4855 11.7316V11.7547H18.4872V12.2933C18.4819 12.3111 18.4819 12.3253 18.4819 12.3431C18.3059 15.7991 15.5823 18.496 12.0037 18.496C8.42501 18.496 5.51123 15.5822 5.51123 12.0036C5.51123 8.42489 8.42501 5.51644 12.0037 5.51111C15.5006 5.51111 18.345 8.24355 18.4855 11.7316ZM15.3601 7.93244C15.3157 7.90933 15.2748 7.89155 15.2339 7.87733V7.88266L15.2161 7.89155C15.2037 7.88622 15.1948 7.88266 15.1806 7.87733C15.1255 7.85422 15.0757 7.83644 15.0259 7.81866C14.9708 7.79911 14.9121 7.78133 14.8535 7.76356L14.8535 7.76355C14.8056 7.74852 14.7546 7.73454 14.7045 7.7208C14.6895 7.71666 14.6745 7.71255 14.6597 7.70844C14.6392 7.704 14.6179 7.69955 14.5965 7.6951C14.5752 7.69066 14.5539 7.68622 14.5335 7.68178C14.5106 7.67737 14.4925 7.67298 14.4762 7.66901C14.4595 7.66496 14.4447 7.66136 14.4286 7.65866C14.4037 7.65442 14.3795 7.64998 14.3557 7.6456C14.3096 7.63715 14.2651 7.62897 14.2206 7.62311C14.153 7.61066 14.0801 7.60177 14.0126 7.59644C13.8632 7.58222 13.7228 7.57333 13.5823 7.57333C11.1308 7.57333 9.13968 9.56444 9.13968 12.016C9.13968 14.4676 11.1343 16.4587 13.5823 16.4587C13.7228 16.4587 13.8632 16.4498 14.0072 16.4356C14.0799 16.4267 14.1473 16.4178 14.2146 16.409L14.2152 16.4089C14.2416 16.4042 14.2677 16.3999 14.2936 16.3958C14.3359 16.3889 14.3778 16.3821 14.4197 16.3733C14.4266 16.3718 14.4332 16.3704 14.4394 16.3691C14.4698 16.3625 14.4927 16.3576 14.5192 16.3502C14.5548 16.3445 14.586 16.3365 14.6146 16.3292C14.6303 16.3252 14.6452 16.3214 14.6597 16.3182C14.7075 16.3032 14.7585 16.2892 14.8086 16.2755C14.8236 16.2713 14.8386 16.2672 14.8535 16.2631C14.8828 16.2542 14.9121 16.244 14.9415 16.2338C14.9708 16.2235 15.0001 16.2133 15.0295 16.2044C15.0739 16.1849 15.1236 16.1671 15.1734 16.1494L15.1735 16.1493C15.1767 16.1484 15.1798 16.1475 15.1827 16.1466C15.1962 16.1427 15.2071 16.1395 15.2143 16.1351L15.2321 16.1298C15.2703 16.1165 15.3085 16.1001 15.3468 16.0835C15.0059 16.1719 14.6495 16.2204 14.2828 16.2204C12.121 16.2204 10.2792 14.5422 10.089 12.3929V12.3662C10.089 12.3164 10.0855 12.2613 10.0801 12.2116C10.0748 12.1938 10.0748 12.1813 10.0748 12.1671C10.0695 12.1173 10.0695 12.064 10.0695 12.0089C10.0695 11.9791 10.0708 11.9507 10.0722 11.9227C10.0735 11.8956 10.0748 11.8689 10.0748 11.8418L10.0801 11.7867C10.0801 11.7404 10.0837 11.6907 10.089 11.6462V11.6284C10.2792 9.47555 12.121 7.792 14.2828 7.792C14.6543 7.792 15.017 7.84177 15.3601 7.93244ZM10.537 11.8667V11.92C10.537 11.9467 10.537 11.9733 10.5317 11.9964C10.5317 12.0373 10.5317 12.0782 10.537 12.1191V12.1422C10.6046 13.2782 11.5095 14.1742 12.7077 14.1742C13.9059 14.1742 14.8837 13.1964 14.8837 11.9982C14.8837 10.8 13.8561 9.82222 12.7077 9.82222C11.5592 9.82222 10.6046 10.7218 10.537 11.8667ZM15.3548 12.0036C15.3548 13.4596 14.169 14.6453 12.713 14.6453C12.6508 14.6453 12.5868 14.6418 12.5281 14.6364C12.7663 14.7058 13.0206 14.7413 13.2783 14.7413C14.7859 14.7413 16.0161 13.5111 16.0161 12.0036C16.0161 10.496 14.7895 9.26577 13.2783 9.26577C13.017 9.26577 12.7681 9.30311 12.5281 9.37066C12.5444 9.36973 12.5604 9.36868 12.5763 9.36764C12.6214 9.36468 12.6657 9.36177 12.713 9.36177C14.169 9.36177 15.3548 10.5476 15.3548 12.0036ZM13.337 8.8C15.0757 8.832 16.4819 10.2578 16.4819 12.0036C16.4819 13.7511 15.0739 15.1751 13.337 15.216C13.4775 15.2338 13.6215 15.2427 13.7708 15.2427C15.5521 15.2427 17.0046 13.792 17.0046 12.0089C17.0046 10.2258 15.5539 8.77333 13.7708 8.77333C13.6215 8.77333 13.4775 8.78222 13.337 8.8ZM13.7317 15.6996C13.9077 15.7262 14.0943 15.744 14.2792 15.744C16.265 15.744 17.9077 14.1973 18.0161 12.2151V11.7813C17.9023 9.79911 16.265 8.25244 14.2792 8.25244C14.0943 8.25244 13.913 8.27022 13.7317 8.29689H13.7726C15.8135 8.29689 17.4739 9.95733 17.4739 11.9982C17.4739 14.0391 15.8135 15.6996 13.7726 15.6996H13.7317ZM5.98234 12.0036C5.98234 15.3244 8.68279 18.0249 12.0037 18.0249H12.0072C13.0561 18.0249 14.0463 17.7582 14.9068 17.2924C14.8872 17.3013 14.8659 17.3102 14.8428 17.3191C14.6846 17.3831 14.5228 17.4382 14.3592 17.4827L14.3361 17.488C14.3237 17.488 14.3059 17.4916 14.2917 17.4969C14.2838 17.4989 14.276 17.5009 14.2681 17.5029C14.207 17.5187 14.1471 17.5341 14.0872 17.5467L14.0463 17.5556C13.9704 17.5749 13.9007 17.5868 13.832 17.5985C13.8187 17.6008 13.8054 17.603 13.7921 17.6053C13.4668 17.664 13.1361 17.6907 12.8108 17.6907C9.67479 17.6907 7.12367 15.1396 7.12367 12.0036C7.12367 8.86755 9.66945 6.31644 12.8055 6.32533C13.1361 6.32533 13.465 6.35555 13.7868 6.41066C13.8721 6.42311 13.9486 6.43733 14.0303 6.45511L14.089 6.46933C14.153 6.48355 14.2206 6.50133 14.2881 6.51911C14.3006 6.51911 14.3183 6.52266 14.3326 6.528L14.3557 6.53333C14.5228 6.57778 14.6846 6.63289 14.8392 6.69155C14.848 6.69552 14.8563 6.69878 14.8645 6.70196C14.8746 6.70591 14.8845 6.70974 14.8943 6.71466C14.0357 6.24533 13.0526 5.98222 12.0037 5.98222C8.68279 5.98222 5.98234 8.68266 5.98234 12.0036ZM14.6721 16.8747C14.7095 16.8622 14.7503 16.848 14.7859 16.8302H14.7823C14.8167 16.8167 14.8502 16.8031 14.8825 16.79C14.9136 16.7773 14.9437 16.7651 14.9726 16.7538C15.0526 16.7182 15.1308 16.6773 15.2072 16.6364C15.193 16.6364 15.1841 16.64 15.1752 16.6453C15.1592 16.6508 15.1434 16.6563 15.1278 16.6618C15.078 16.6791 15.0302 16.6958 14.9815 16.7093C14.9086 16.7324 14.8375 16.7502 14.7646 16.768C14.7397 16.7724 14.7161 16.7782 14.6926 16.784C14.669 16.7898 14.6455 16.7956 14.6206 16.8C14.5886 16.8089 14.5477 16.8178 14.5032 16.8267C14.4964 16.8279 14.4896 16.8291 14.4827 16.8303C14.4172 16.8418 14.3466 16.8542 14.2775 16.8622C14.2569 16.8647 14.236 16.8675 14.2148 16.8704C14.161 16.8776 14.105 16.8851 14.0463 16.8889C13.8935 16.9031 13.7352 16.912 13.5806 16.912C10.8748 16.912 8.67212 14.7093 8.67212 12.0036C8.67212 9.29778 10.8766 7.09511 13.5859 7.09511C13.7406 7.09511 13.8988 7.104 14.057 7.11822C14.1335 7.12178 14.2117 7.13066 14.2881 7.14489C14.3592 7.15377 14.4375 7.16622 14.5139 7.18044C14.5512 7.18933 14.5921 7.19822 14.6366 7.20711C14.6429 7.20848 14.6492 7.20985 14.6557 7.21124C14.6913 7.21886 14.7296 7.22708 14.7717 7.23911C14.8446 7.25689 14.9157 7.27466 14.9886 7.29777C15.0206 7.30933 15.0521 7.31955 15.0837 7.32978C15.1152 7.34 15.1468 7.35022 15.1788 7.36177C15.1912 7.36711 15.2001 7.37066 15.2143 7.376C15.1379 7.33511 15.0615 7.29422 14.9797 7.25866C14.9477 7.24533 14.9161 7.23155 14.8846 7.21777C14.853 7.204 14.8215 7.19022 14.7895 7.17689C14.7607 7.16584 14.7341 7.15479 14.7094 7.14459C14.6945 7.13838 14.6802 7.13249 14.6668 7.12711C14.5263 7.072 14.3788 7.02222 14.2241 6.97778L14.169 6.96355C14.1068 6.94578 14.0392 6.928 13.9752 6.91377L13.9521 6.90844C13.9471 6.90702 13.9427 6.90617 13.9383 6.90531C13.9317 6.90403 13.9251 6.90275 13.9166 6.89955C13.8765 6.89066 13.8317 6.88246 13.7858 6.87409C13.7583 6.86907 13.7305 6.86399 13.7032 6.85866C13.4099 6.80889 13.1059 6.78222 12.8037 6.78222C9.92723 6.78222 7.57701 9.11111 7.57701 11.9893C7.57701 14.8676 9.9219 17.2107 12.7983 17.2107C13.1006 17.2107 13.4046 17.184 13.6979 17.1342C13.7708 17.1253 13.8472 17.1111 13.9201 17.0933C13.9237 17.0933 13.9326 17.0933 13.9468 17.088L13.9646 17.0827C14.0428 17.0649 14.105 17.0507 14.169 17.0329L14.233 17.0187C14.3788 16.9796 14.5281 16.9298 14.6721 16.8747Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

export {
  IconLinkedin,
  IconSpotify,
  IconBag,
  IconGoogleScholar,
  IconImdb,
  IconPen,
  IconHouse,
  IconPhotoBucket,
  IconPin,
  IconVimeo,
  IconOwraLogo,
  IconStar,
  IconPointer,
}
