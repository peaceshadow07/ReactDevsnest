import React, { useRef } from 'react'

export default function KittyGallery() {
  const index = useRef(0);
  const galleryRef = useRef(null);

  function showNextImage(){
    const imageList = galleryRef.current.querySelectorAll(".image");
    index.current = index.current + 1 >= imageList.length ? 0 : index.current + 1;
    imageList[index.current].scrollIntoView({
      behaviour :"smooth",
      block: "nearest",
      inline:"center",
    });
  }


  return (
    <>
        <section>
            <h2>Kitty Gallery</h2>
            <button onClick={showNextImage}>Next</button>
            <ul ref={galleryRef} className='gallery'>
                <li className='image'><img src='https://placekitten.com/g/200/300' alt='Kitten Image'></img></li>
                <li className='image'><img src='https://placekitten.com/g/300/300' alt='Kitten Image'></img></li>
                <li className='image'><img src='https://placekitten.com/g/250/300' alt='Kitten Image'></img></li>
            </ul>
        </section>
    </>
  )
}
