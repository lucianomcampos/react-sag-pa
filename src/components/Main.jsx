import React from 'react';
import {
  FaSignOutAlt,
  FaUserCog,
  FaClipboardList,
  FaTasks,
  FaTruckMoving,
} from 'react-icons/fa';

export default function Main() {
  return (
    <div className="h-full w-full">
      <div
        className={` flex flex-row justify-between items-center
                  bg-gray-100 h-16 w-full 
                  text-xl text-yellow-400 
                  font-semibold 
                  font-sans
                   px-3`}
      >
        <span>Sistema de Armazém Geral </span>
        <div class="inline-flex">
          <button class="bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-3xl">
            <FaUserCog size={30} color="#1F2937" />
          </button>

          <button class="bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-3xl">
            <FaSignOutAlt size={30} color="#1F2937 " />
          </button>
        </div>
      </div>
      <div id="main" className=" bg-gray-100 w-full">
        <div class="  flex flex-row mb-4 p-3 ">
          <div class="flex w-1/3 h-auto justify-center">
            <div class="flex flex-col align-middle justify-center p-3 w-72 h-36 bg-white rounded overflow-hidden shadow-md">
              <FaClipboardList size={100} color="#32A350" />
              Pedido Aberto
            </div>
          </div>
          <div class=" flex w-1/3 h-auto justify-center ">
            <div class=" flex flex-col align-middle justify-center p-3 w-72 h-36 bg-white rounded overflow-hidden shadow-md">
              <FaTasks size={100} color="#4081EC" />
              Pedido Processado
            </div>
          </div>
          <div class="flex w-1/3 h-auto justify-center">
            <div class=" flex flex-col align-middle justify-center p-3 w-72 h-36 bg-white  rounded overflow-hidden shadow-md">
              <FaTruckMoving size={100} color="#F26D0D" />
              Pedido Embarcado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
