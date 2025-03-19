// "use client";

// import { Canvas } from "@react-three/fiber";
// import { Html, OrbitControls } from "@react-three/drei";

// export default function Phone() {
//   return (
//     <div className="w-full h-screen bg-white">
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.5} />
//         <OrbitControls enableZoom={false} />

//         {/* PHONE BODY */}
//         <mesh>
//           {/* Box geometry as a simple "phone" */}
//           <boxGeometry args={[2, 4, 0.3]} />
//           <meshStandardMaterial color="black" />

//           {/* HTML Over the “screen” area */}
//           <Html
//             transform // allow 3D transform
//             position={[0, 0, 0.16]} // slightly above the phone’s surface
//             distanceFactor={1.3} // adjust scaling
//           >
//             <div
//               style={{
//                 width: "180px",
//                 height: "380px",
//                 backgroundColor: "white",
//                 borderRadius: "16px",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="/freshly-icon-square.png"
//                 alt="Logo"
//                 style={{ width: "80px", marginBottom: "1rem" }}
//               />
//               <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold mb-4">
//                 💬 Talk to Pam →
//               </button>
//               <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold">
//                 📅 Book a Demo
//               </button>
//             </div>
//           </Html>
//         </mesh>
//       </Canvas>
//     </div>
//   );
// }
