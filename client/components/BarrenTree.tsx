import React from 'react'


const BarrenTree = () => (
    <svg style={{ position: 'fixed', bottom: '60px', width: '80%', height: '80%', right: 0 }} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M549.363 248.325C543.938 247.463 539.132 248.345 533.88 249.644C532.371 250.017 530.73 250.389 529.077 250.57C552.264 236.96 571.883 217.916 586.381 195.374C573.399 212.251 557.346 226.586 539.168 237.506C538.423 230.376 540.575 223.294 542.573 216.468C544.278 210.647 545.982 204.825 547.686 199.004C545.214 204.974 542.743 210.944 540.272 216.914C537.216 224.296 534.33 231.917 534.897 239.988C521.018 247.777 505.983 253.603 490.193 257.098C500.748 242.151 514.023 229.634 529.771 219.615C508.283 228.669 489.929 242.184 474.903 259.736C468.942 260.477 462.943 260.89 456.92 260.949C447.964 261.036 439.042 259.971 430.087 260.141C422.673 260.282 415.464 261.552 408.502 264.033C406.332 264.806 404.207 265.677 402.115 266.618C399.403 261.282 400.037 254.435 402.373 249.032C405.403 242.024 410.93 236.41 416.731 231.527C408.494 235.791 400.376 241.349 395.752 249.531C391.955 256.251 390.86 264.057 392.975 271.211C390.084 272.79 387.232 274.44 384.391 276.09C376.47 280.692 368.55 285.295 360.63 289.897C356.477 292.31 352.324 294.723 348.171 297.136C346.319 286.368 344.026 275.675 341.297 265.101C347.476 258.934 352.774 251.986 357.622 244.608C365.589 232.482 372.447 219.424 382.559 208.821C389.999 201.017 398.979 195.879 409.494 193.355C421.944 190.368 434.739 189.272 446.826 184.863C460.653 179.819 472.959 171.696 483.44 161.655C491.451 162.952 500.253 156.563 506.818 153.123C513.425 149.662 520.032 146.201 526.639 142.739C517.922 146.317 509.207 149.899 500.487 153.47C496.615 155.056 491.795 157.721 487.297 157.788C491.492 153.39 495.361 148.684 498.879 143.749C504.507 135.851 509.074 127.423 512.78 118.644C522.204 117.45 529.531 111.011 536.689 105.126C543.566 99.4721 550.443 93.8183 557.32 88.1642C550.643 92.7831 543.967 97.4021 537.29 102.021C530.602 106.647 523.065 113.003 514.602 114.134C522.323 94.0392 525.787 72.2943 527.174 50.9106C523.123 79.8201 514.433 109.956 497.331 133.859C487.571 121.782 496.774 102.674 494.654 88.7709C495.591 104.603 483.805 123.247 494.606 137.521C485.728 148.993 474.754 158.854 461.222 166.2C454.999 169.578 448.473 172.18 441.698 174.004C447.676 160.25 446.719 141.984 460.665 133.382C445.245 141.415 446.287 162.176 437.604 175.004C435.046 175.566 432.457 176.023 429.835 176.368C420.564 177.588 411.175 178.145 402.111 180.083C400.997 172.07 402.804 163.998 407.085 156.61C412.737 146.855 420.935 137.547 420.734 125.679C418.83 138.764 407.078 146.853 399.881 157.083C394.471 164.772 391.996 173.788 392.281 182.879C390.637 183.485 389.01 184.165 387.403 184.935C379.273 188.832 372.333 194.361 366.131 200.681C359.842 195.444 358.271 185.538 358.231 177.932C358.181 168.019 360.741 158.232 362.113 148.462C363.669 137.379 363.599 126.331 359.763 115.678C356.849 107.583 352.119 100.497 346.069 94.3599C351.87 102.942 355.478 112.634 355.902 123.001C356.42 135.678 351.438 147.404 347.179 159.108C340.183 178.329 336.841 201.899 351.757 217.845C350.936 218.943 350.123 220.043 349.318 221.142C344.436 227.804 339.618 234.56 334.153 240.697C331.263 231.891 328.065 223.194 324.557 214.635C318.396 199.6 311.403 184.888 305.525 169.741C311.056 155.529 317.64 141.803 325.268 128.548C316.612 137.751 308.569 147.422 301.127 157.559C297.182 145.5 294.534 133.214 293.528 120.652C299.653 109.339 305.778 98.0263 311.902 86.7138C305.652 95.7981 299.401 104.882 293.15 113.966C293.092 112.18 293.066 110.388 293.076 108.589C293.164 92.8379 295.468 77.3009 298.875 61.9533C298.884 61.9175 298.894 61.8731 298.906 61.8215C298.906 61.8233 298.904 61.8248 298.903 61.8266C298.903 61.8266 298.972 61.5334 298.906 61.8215C299.043 61.5287 299.402 61.3566 299.402 61.3566C302.984 57.0469 306.567 52.7369 310.15 48.4272C314.26 43.4829 319.532 36.2463 327.051 37.8829C319.532 35.2759 313.085 42.1005 308.228 46.6779C305.759 49.0053 303.289 51.3327 300.82 53.66C304.148 40.1744 308.182 26.8327 312.166 13.6195C312.139 13.6889 312.112 13.7587 312.084 13.8282C303.335 36.1923 294.478 58.9082 289.271 82.388C286.728 77.8683 283.237 73.9774 279.038 70.593C273.178 65.8835 269.916 58.7618 274.394 51.866C269.266 58.2059 271.395 66.1477 276.716 71.5451C282.067 76.973 286.168 82.7116 287.673 90.2575C286.625 95.9606 285.809 101.71 285.287 107.513C284.201 119.578 284.586 131.553 286.245 143.419C283.825 141.055 281.272 138.844 278.367 137.027C270.235 131.942 260.121 132.222 251.503 128.294C258.886 133.683 269.146 135.235 275.479 142.012C281.512 148.127 285.078 156.19 290.159 163.07C292.538 172.354 295.465 181.476 298.539 190.553C292.386 192.07 286.156 192.682 279.871 192.368C280.882 189.3 281.238 186.043 280.849 182.695C279.984 175.254 275.476 169.7 269.199 165.81C263.077 162.017 257.034 158.657 251.773 153.674C247.624 149.745 244.101 145.276 241.085 140.46C245.546 151.226 252.556 160.481 261.663 167.883C266.066 171.464 270.836 175.087 271.399 181.107C271.723 184.564 270.688 188.132 268.371 190.738C252.667 186.935 238.827 176.417 230.518 162.843C223.753 151.792 220.837 139.173 218.98 126.449C220.801 121.211 222.622 115.974 224.443 110.736C227.333 102.425 231.055 93.5724 229.27 84.6345C228.76 93.4067 223.135 100.747 218.41 107.828C217.92 108.561 217.431 109.295 216.941 110.028C216.937 109.992 216.933 109.956 216.929 109.919C215.966 101.659 214.939 93.2388 213.175 85.0114C208.503 71.0401 228.641 60.5795 224.096 46.1825C226.369 57.5788 215.186 65.2303 210.531 74.8361C208.961 69.8055 206.988 64.9085 204.442 60.2348C196.943 46.4693 184.32 34.9327 168.266 32.4074C187.204 37.1913 199.87 54.6089 204.078 72.7228C206.105 80.5271 206.997 88.4946 207.442 96.5136C205.107 93.6723 202.772 90.8309 200.438 87.9895C195.543 82.0322 190.42 73.9541 182.328 72.0742C190.361 74.8461 194.668 83.8968 198.983 90.4572C201.902 94.8954 204.821 99.3335 207.74 103.772C207.93 110.23 207.967 116.7 208.202 123.124L208.255 124.485C208.294 125.426 208.337 126.367 208.386 127.305C208.683 132.915 209.213 138.516 210.107 144.031C207.598 143.189 205.013 142.511 202.44 141.884C194.367 139.917 184.956 137.312 181.537 128.935C182.751 137.237 190.242 142.505 197.2 146.218C202.418 149.002 208.958 151.609 212.819 156.351C215.115 164.392 218.472 172.108 223.36 179.233C224.551 180.971 225.804 182.645 227.113 184.257C224.434 183.957 221.828 183.062 219.263 182.307C213.779 180.694 206.949 179.308 202.093 183.233C209.972 179.96 217.01 187.198 223.435 190.468C227.018 192.292 231.189 193.171 235.089 192.689C253.896 209.789 280.234 216.748 305.94 212.192C306.475 213.79 307.008 215.39 307.529 216.992C309.92 224.329 312.082 231.738 314.016 239.205C305.15 240.889 294.371 236.598 286.652 234.043C279.392 231.639 272.018 229.369 264.337 228.796C259.811 228.459 255.359 228.872 250.918 229.487C250 222.58 243.26 218.053 236.743 216.047C232.063 214.606 227.214 213.741 222.96 211.216C219.816 209.351 217.115 206.854 214.97 203.929C218.524 210.784 224.449 214.905 231.44 217.975C236.111 220.025 245.378 223.985 244.201 230.503C243.73 230.575 243.26 230.646 242.788 230.716C234.926 231.882 227.642 231.657 220.469 227.955C214.05 224.642 208.55 219.877 203.033 215.317C193.604 207.522 183.042 200.071 170.179 200.659C185.422 202.004 195.002 214.105 204.741 224.352C210.195 230.09 216.23 235.619 223.629 238.809C231.159 242.053 239.248 242.148 247.32 241.942C250.482 241.862 253.513 241.902 256.479 242.146C255.879 242.379 255.279 242.613 254.679 242.847C248.365 245.308 241.96 248.41 235.255 249.661C223.758 251.807 211.267 241.037 200.425 247.425C205.708 244.981 211.692 246.635 216.797 248.701C223.404 251.375 229.459 253.928 236.781 253.091C243.487 252.323 250.049 250.001 256.52 248.191C260.62 247.044 264.72 245.897 268.82 244.75C268.806 244.71 268.792 244.67 268.779 244.63C269.776 244.97 270.776 245.348 271.783 245.769C278.707 248.662 285.256 252.351 292.186 255.239C300.744 258.693 309.855 260.673 318.754 259.863C320.487 268.528 321.918 277.253 323.041 286.015C318.202 284.882 313.35 283.847 308.486 282.906C305.978 276.841 299.286 271.306 294.782 268.192C286.214 262.268 276.166 259.486 265.768 259.496C276.901 260.392 287.394 264.524 295.554 272.173C298.317 274.763 301.709 278.231 303.596 281.993C280.909 277.914 257.942 275.926 234.692 276.084C250.91 279.771 266.725 284.494 282.134 290.269C281.891 290.315 281.648 290.359 281.406 290.409C274.414 291.889 268.009 294.887 261.632 297.977C268.195 295.645 274.779 293.381 281.765 292.682C283.816 292.489 285.858 292.427 287.89 292.482C300.653 297.517 313.133 303.286 325.327 309.8C326.325 325.318 326.363 340.895 325.422 356.415C317.228 354.019 309.035 351.622 300.842 349.225C300.406 339.894 297.164 330.854 290.992 323.385C282.695 313.721 270.621 308.416 257.825 308.476C269.178 310.233 279.424 316.192 285.674 325.837C289.679 332.018 291.417 339.214 291.059 346.363C278.29 342.628 265.52 338.892 252.75 335.156C243.911 332.571 234.724 330.17 225.676 327.374C219.663 315.805 219.019 302.668 223.321 290.131C216.552 300.436 213.84 312.11 214.985 323.815C198.245 317.762 182.698 309.471 171.642 295.012C169.774 292.569 168.036 290.047 166.396 287.468C177.218 267.281 172.205 242.099 152.313 229.003C165.637 241.632 169.361 261.508 160.291 276.897C154.817 266.579 150.174 255.773 144.643 245.537C141.733 240.152 138.532 234.998 134.992 230.126C134.793 224.916 134.595 219.706 134.397 214.497C134.129 207.474 134.097 194.79 124.24 194.047C133.607 195.721 132.271 207.718 131.818 214.46C131.58 217.995 131.342 221.529 131.104 225.064C125.895 218.647 120.008 212.803 113.308 207.674C113.322 207.656 113.336 207.639 113.35 207.621C109.772 205.133 109.678 200.025 109.739 196.157C109.816 191.232 109.651 186.55 107.515 181.991C103.604 173.644 95.0239 168.218 85.6763 168.287C94.8886 168.982 102.961 175.035 105.753 183.759C107.614 189.494 105.533 196.559 106.19 202.687C78.9381 185.176 44.9303 179.914 13.6207 188.914C23.4622 186.685 33.3816 185.611 43.4886 186.129C57.8287 186.865 72.0247 190.477 85.002 196.554C67.6622 200.975 50.3024 201.771 32.3243 201.213C52.0445 203.39 71.5548 203.689 91.0775 199.63C108.992 209.364 120.046 219.599 130.16 236.786C133.544 242.535 136.413 248.524 139.082 254.605C123.913 245.531 107.589 238.919 90.1439 234.823C109.035 240.703 126.338 249.548 141.969 261.362C145.617 270.083 149.093 278.885 153.3 287.352C159.415 299.658 167.167 310.809 177.707 319.804C179.562 321.388 181.491 322.877 183.479 324.287C170.661 331.416 154.321 326.818 140.56 322.399C149.682 327.509 159.778 333.455 170.48 334.332C178.419 335.167 186.221 333.858 193.179 330.331C201.801 335.081 211.081 338.795 220.213 342.179C221.503 342.656 222.795 343.128 224.087 343.602C210.593 352.184 196.295 359.346 181.193 365.104C200.029 361.424 218.104 355.607 235.439 347.717C247.912 352.188 260.432 356.541 272.913 360.982C274.181 361.433 275.448 361.884 276.716 362.335C271.214 366.757 265.401 370.657 258.354 372.665C246.291 376.102 232.376 377.001 223.846 387.244C234.278 377.844 249.556 380.193 262.436 378.07C272.013 376.492 280.247 371.479 288.376 366.484C300.037 370.633 311.699 374.782 323.36 378.931C322.695 384.346 321.911 389.747 321.002 395.129C315.542 427.481 305.907 458.644 292.471 488.64C284.867 505.071 276.64 521.502 272.531 539.204C269.612 551.783 269.074 571.166 271.449 586.378H316.222C313.431 571.328 315.827 543.427 319.061 532.667C323.652 517.16 330.121 502.238 335.066 486.836C343.078 461.886 348.274 436.167 351.238 410.192C355.982 400.447 368.449 395.048 378.225 391.954C385.377 389.691 392.682 387.954 399.857 385.776C401.423 386.655 402.934 387.629 404.402 388.521C410.367 392.149 416.622 394.663 423.697 395.045C436.049 395.711 447.971 389.813 454.854 379.714C446.965 389.184 434.319 393.931 422.055 391.346C416.015 390.073 411.355 386.983 406.585 383.567C413.511 381.124 420.268 378.248 426.787 374.875C434.985 370.635 442.686 365.76 449.876 360.314C463.785 357.661 476.714 352.4 488.444 344.527C478.335 349.824 467.641 353.351 456.452 355.05C471.817 342.084 484.588 326.363 494.56 308.589C494.129 309.179 493.698 309.769 493.268 310.358C477.551 331.873 457.182 348.379 433.494 359.628C437.063 350.539 440.006 341.246 442.316 331.739C438.365 342.225 433.629 352.335 428.092 362.079C422.509 364.493 416.759 366.631 410.849 368.479C402.05 370.765 393.252 372.39 384.257 373.728C383.41 373.854 382.565 373.984 381.72 374.116C384.669 356.53 410.931 349.185 413.623 330.431C410.608 342.268 399.237 348.033 390.017 354.786C382.787 360.082 377.114 366.869 375.413 375.185C369.188 376.341 363.048 377.835 357.106 380.102C355.9 380.561 354.714 381.063 353.546 381.599C354.432 361.675 353.777 341.629 351.618 321.726C360.708 315.379 369.798 309.031 378.888 302.684C380.615 301.479 382.336 300.26 384.056 299.038C390.439 298.42 397.469 300.818 403.123 302.815C411.403 305.739 420.06 309.005 429.009 307.599C417.906 307.075 409.152 299.984 399.744 295.021C397.765 293.977 395.718 293.042 393.628 292.262C397.702 289.421 401.819 286.645 406.041 284.048C414.762 278.684 423.67 275.456 433.966 274.734C435.988 274.592 438.01 274.482 440.031 274.384C448.939 283.052 461.605 285.152 473.722 287.431C485.041 289.559 496.36 291.687 507.679 293.816C497.978 290.305 488.278 286.794 478.576 283.283C471.385 280.681 462.174 278.291 455.218 273.661C460.603 273.321 465.974 272.798 471.321 271.786C484.43 269.304 497 265.628 509.291 260.475C513.714 258.621 518.035 256.574 522.253 254.357C530.737 256.51 539.428 249.982 548.075 250.457C556.822 250.904 568.047 254.498 574.909 247.033C567.906 253.562 557.548 249.626 549.363 248.325Z"
            fill="black" />
    </svg>
)

export default BarrenTree