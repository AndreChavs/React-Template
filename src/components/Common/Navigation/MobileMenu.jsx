import React from 'react'

const MobileMenu = () => {
    const [mobile, setMobile] = React.useState(false)
    const menuRef = React.useRef()

    function handleClick() {
        setMobile(!mobile)
    }

    React.useEffect(() => {
        if (mobile) {
            menuRef.current.classList.toggle('active')
        }
    },[mobile])
    return <div className={styles} onClick={handleClick}>
        <div className='icon'></div>
    </div>
}

export default MobileMenu