import gallery from "../../assets/images/gallery.jpg";
//! Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//! Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { apiGDG } from "../../../services/api.gdg";
import { useEffect, useState } from "react";

export default function OurGallery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getImagesGallery() {
    try {
      const options = {
        method: "GET",
        url: `/endpoint/sasa/json`,
      };
      const { data } = await apiGDG.request(options);
      setData(data.images);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    getImagesGallery();
  }, []);

  if (loading) {
    return (
      <section className="bg-bgSection" aria-busy="true">
        <div className="py-16 md:py-24">
          <h2 className="title-section">OUR GALLERY</h2>

          <div className="mt-8 px-4">
            <div className="flex gap-6 overflow-hidden py-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[280px] sm:w-[352px] rounded-xl"
                >
                  <div className="h-72 rounded-xl bg-gray-300/70 dark:bg-gray-700 animate-pulse border-2 border-borderGallery" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <main>
        <section className="bg-bgSection">
          <div className="py-16 md:py-24">
            <h2 className="title-section">OUR GALLERY</h2>
            <div>
              {/* Gallery content coming soon */}
              <Swiper
                modules={[EffectCoverflow, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                initialSlide={2}
                grabCursor={true}
                centeredSlides={true}
                effect={"coverflow"}
                coverflowEffect={{
                  rotate: 0, // دوران الصور الجانبية
                  stretch: 0, // المسافة اللي الصور بتتمدد بيها
                  depth: 10, // العمق – كل ما يزيد، الصورة اللي في النص تبان أقرب
                  modifier: 1, // قوة التأثير
                  slideShadows: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2.2,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  1440: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >
                {data.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-xl overflow-hidden mb-16">
                      <img
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-[352px] h-72 rounded-xl border-2 shadow-3xl border-borderGallery"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
