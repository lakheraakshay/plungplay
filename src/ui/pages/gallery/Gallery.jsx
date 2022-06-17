import React from 'react'

const Gallery = () => {
    return (
        <>
            <div>
                <img src={require("../../assets/home/gallery.png")} alt="" style={{ width: '100%' }} />
            </div>
            {/* <img src={require("../../assets/home/gallerygrid.png")} alt="" style={{ width: '100%' ,marginBottom:'-10px'}} /> */}
        </>
    )
}

export default Gallery