import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const Contact = () => {

  return (
    <div className="container flex">
      <div className="px-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14894.506820152996!2d105.79335975!3d21.0476174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1705027956361!5m2!1svi!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <div className="w-full h-full">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-l font-bold mb-2" >
              Address :
            </label>
            <a>Bach Khoa Aptech - HTC Building, 250 Hoang Quoc Viet, Co Nhue, Cau Giay, Hanoi, Vietnam </a>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-l font-bold mb-2" >
              Email :
            </label>
            <a>Hautrung16082003@gmail.com</a>
            <p>loczngo@gmail.com</p>
            <p>trananh892k3@gmail.com</p>
            <p>chibinh890@gmail.com</p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-l font-bold mb-2" >
              Member :
            </label>
            <a>Ngo Van Hau</a>
            <p>Ngo Vu Thanh Loc</p>
            <p>Tran Lan Anh</p>
            <p>Vo Thi Binh Chi</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
