import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useGraph } from "@react-three/fiber"
import { useEffect, useMemo, useRef } from "react"
import { SkeletonUtils } from "three-stdlib"

export default Developer

const glb = "/assets/dev/developer.glb"

useGLTF.preload(glb)

function Developer({ animationName = "idle", ...props }) {
    const group = useRef()
    , gltf = useGLTF(glb)
    , clone = useMemo(() => SkeletonUtils.clone(gltf.scene), [gltf.scene]);
    
    const { nodes, materials } = useGraph(clone)

    const { animations: idleAnimation } = useFBX("/assets/dev/idle.fbx")
    , { animations: saluteAnimation } = useFBX("/assets/dev/salute.fbx")
    , { animations: clappingAnimation } = useFBX("/assets/dev/clapping.fbx")
    , { animations: victoryAnimation } = useFBX("/assets/dev/victory.fbx");

    idleAnimation[0].name = "idle"
    saluteAnimation[0].name = "salute"
    clappingAnimation[0].name = "clapping"
    victoryAnimation[0].name = "victory"

    const { actions } = useAnimations([
        idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]
    ], group);

    const actionEffect = () => {
        actions[animationName].reset()
            .fadeIn(0.5)
            .play();
        
        return () => actions[animationName].fadeOut(0.5);
    }

    useEffect(actionEffect, [animationName]);

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={nodes.Hips} />
            <skinnedMesh 
                skeleton={nodes.Wolf3D_Hair.skeleton}
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
            />
            <skinnedMesh 
                skeleton={nodes.Wolf3D_Glasses.skeleton}
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
            />
            <skinnedMesh 
                skeleton={nodes.Wolf3D_Body.skeleton}
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
            />
            <skinnedMesh 
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
            />
            <skinnedMesh 
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
            />
            <skinnedMesh 
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
            />
            
            <skinnedMesh 
                name="EyeLeft"
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                skeleton={nodes.EyeLeft.skeleton}
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
            />
            <skinnedMesh 
                name="EyeRight"
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                skeleton={nodes.EyeRight.skeleton}
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
            />
            <skinnedMesh 
                name="Wolf3D_Head"
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                skeleton={nodes.EyeLeft.skeleton}
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Hair}
            />
            <skinnedMesh 
                name="Wolf3D_Head"
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                skeleton={nodes.Wolf3D_Head.skeleton}
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
            />
            <skinnedMesh 
                name="Wolf3D_Teeth"
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
            />
        </group>
    )
}