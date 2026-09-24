import React from 'react';

interface GoogleMapProps {
  mapSrc?: string;
  height?: string; 
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58205.282719294984!2d89.8759705463603!3d24.247717964423526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfbe3d271b363%3A0x8a0d420f347f7c7c!2sTangail!5e0!3m2!1sen!2sbd!4v1790144600627!5m2!1sen!2sbd",
  className = "rounded-2xl h-[250px] sm:h-[400px]",
}) => {
  return (
    <div className='dark:bg-[#141C2B] pb-10 px-5'>
        <div 
      className={`w-full overflow-hidden rounded-2xl ${className}`}
    >
      <iframe
        title="Google Map Location"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full rounded-2xl"
      ></iframe>
    </div>
    </div>
  );
};

export default GoogleMap;