"use client"

import SweetAlert2 from 'react-sweetalert2'
import '@sweetalert2/theme-dark'



type Props = React.ComponentProps<typeof SweetAlert2>

const SweetAlert:React.FC<Props> = (props) => {
    
    
    return <SweetAlert2 {...props} />
}

export default SweetAlert