if (typeof window !== "undefined") {
  // Client-side-only code

window.addEventListener('load', init);

function init(){
    const width = 960;
    const height = 540;
    let rot = 0;

    // シーンを作成
    const scene = new THREE.Scene();
    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    // レンダラー作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas'),
    });

    // 初期化のために実行
    onResize();
    // リサイズイベント発生時に実行
    window.addEventListener('resize', onResize);

    function onResize() {
        // サイズを取得
        const width = window.innerWidth;
        const height = window.innerHeight;
        // レンダラーのサイズを調整する
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        // カメラのアスペクト比を正す
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }



    // 球体生成
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    //マテリアル生成、材質決定
    const material = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('earthmap1k.jpg'),
        side: THREE.DoubleSide,
    });
    
    //　メッシュ作成
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.9);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    //ポイント光源
    const pointLight = new THREE.PointLight(0xFFFFFF, 2, 1000);
    scene.add(pointLight);
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
    scene.add(pointLightHelper);

    /* 星屑追加 */
    createStarField();
    tick();

    /* 星屑作成 */
    function createStarField() {
    /* x,y,z座標の値がランダムに入った配列を1000個作成 */
        const vertices = [];
        for (let i = 0; i < 1000; i++) {
            const x = 3000 * (Math.random() - 0.5);
            const y = 3000 * (Math.random() - 0.5);
            const z = 3000 * (Math.random() - 0.5);
            vertices.push(x, y, z);
        }

        // 形状データを作成
        const geometry = new THREE.BufferGeometry(); // バッファジオメトリとは、頂点情報や面情報などの形状データを保持するオブジェクト
        geometry.setAttribute(
            'position', 
            new THREE.Float32BufferAttribute(vertices, 3)
        ); // バッファジオメトリに頂点情報を追加
        
        // マテリアルを作成
        const material = new THREE.PointsMaterial({ 
            size: 10,
            color: 0xffffff,
        });

        const stars = new THREE.Points(geometry, material);
        scene.add(stars); 
    }

    //フレームごとに呼び出される関数
    function tick(){
        rot += 0.08;
        const radian = (rot * Math.PI) / 180;
        //角度に応じてカメラの位置を変更
        camera.position.x = 900 * Math.sin(radian);
        // camera.position.y = 100 * Math.cos(radian);
        camera.position.z = -900 * Math.cos(radian);

        //カメラの見る位置を固定する
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        //ライトを周回させる
        pointLight.position.set(
            200 * Math.sin(Date.now() / 500),
            200 * Math.sin(Date.now() / 1000),
            200 * Math.cos(Date.now() / 500)
        );
        
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }

}
}