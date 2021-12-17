import { SVGProps } from 'react'

const ProductsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm11 6a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2h8Zm-3 4a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2h5Zm8-1a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1Zm0-3a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1Z"
      fill="#fff"
    />
  </svg>
)

export default ProductsIcon
