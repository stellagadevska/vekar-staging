import React from "react";

const Map = () => {
  return (
    <section>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.564762881278!2d23.350607276659588!3d42.69176101408027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa859035e0fc3b%3A0xd3b042e2816cff2c!2sSerdika%20Center!5e0!3m2!1sen!2sbg!4v1685361354878!5m2!1sen!2sbg'
          width='100%'
          height='450'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Responsive Google Map'
          className='border-0'
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
