import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import scene from "../assets/3d/mouse.glb";

const Mouse = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  useFrame(() => {
    if (group.current) {
      if (dragging) {
        // Rotate the mouse model on the y-axis when dragging
        group.current.rotation.y += 0.02; // Adjust the rotation speed as needed
      } else {
        // Ease back to the original position when not dragging
        group.current.rotation.y += (0 - group.current.rotation.y) * 0.1;
      }
    }
  });

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[0, 0, 0.169]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={2.165}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material"].geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_002-material"].geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_002-material_1"].geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_008-material"].geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material-material"].geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_005-material"].geometry}
            material={materials["Material.005"]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/computer_mouse_a4tech_bloody_v7.glb");

export default Mouse;
