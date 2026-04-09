export const SITE = {
  title: 'Rigyd — Turn 3D Models into SimReady Assets for Robotics Simulation',
  description: 'Rigyd converts raw 3D models, images, and text into physics-enabled OpenUSD assets for NVIDIA Isaac Sim, MuJoCo, Gazebo, and Unreal Engine. 97% cost reduction vs manual workflows.',
  url: 'https://rigyd.com',
};

export const PLATFORMS = [
  { name: 'NVIDIA Isaac Sim', supported: true },
  { name: 'MuJoCo', supported: true },
  { name: 'Gazebo / ROS 2', supported: true },
  { name: 'Unreal Engine', supported: true },
] as const;

export const STATS = [
  {
    value: '1,000',
    label: 'SimReady assets exist today (NVIDIA\'s library). Your warehouse has 50,000 SKUs.',
    source: 'Source: NVIDIA SimReady Asset Library, 2026',
  },
  {
    value: '40%',
    label: 'Better real-world performance when training combines synthetic + real data. But only with physics-accurate assets.',
    source: 'Source: NVIDIA GR00T N1 Benchmark, 2025',
  },
  {
    value: '97%',
    label: 'Cost reduction in scene preparation. Quality you need at fraction of the time.',
    source: 'Source: Based on $67/hr engineer rate (Glassdoor) \u00d7 avg 4hr manual workflow vs. automated',
  },
  {
    value: '$370K',
    label: 'saved per 1,000-object simulation',
    source: 'Source: 1,000 objects \u00d7 $380 manual cost ($67/hr \u00d7 4hrs) \u2212 $10 automated',
  },
] as const;

export const TECH_DETAILS = [
  {
    title: 'Physics estimation method',
    content: 'Multi-view rendering \u2192 LLM vision (GPT-4V) identifies per-region materials \u2192 Lookup against calibrated materials database \u2192 Volume \u00d7 density = mass. Validated against NeRF2Physics (CVPR 2024) and GaussianProperty approaches.',
  },
  {
    title: 'Collision mesh generation',
    content: 'Automatic convex decomposition (V-HACD) from visual mesh. Configurable complexity: simple hull for mobile navigation, detailed decomposition for grasping.',
  },
  {
    title: 'Output specification',
    content: 'Full SimReady compliance: USDPhysics rigid body + collision + mass APIs, semantic labels (class, category), dense captions, material binding. Passes NVIDIA SimReady Foundation validators.',
  },
  {
    title: 'Accuracy & domain randomization',
    content: 'LLM estimates are calibrated for domain randomization workflows. Mass accuracy: \u00b115\u201320% vs measured (within typical DR variance ranges). Friction: \u00b10.1 coefficient. Sufficient for training generalizable policies \u2014 not intended for precision engineering simulation.',
  },
] as const;

export const USD_CODE = `<span class="code-comment"># SimReady Output (OpenUSD)</span>
<span class="code-keyword">def</span> <span class="code-string">"CeramicMug"</span> (
    prepend apiSchemas = [<span class="code-string">"PhysicsRigidBodyAPI"</span>, <span class="code-string">"PhysicsMassAPI"</span>]
)
{
    <span class="code-type">float</span> <span class="code-property">physics:mass</span> = <span class="code-number">0.34</span>
    <span class="code-type">point3f</span> <span class="code-property">physics:centerOfMass</span> = (<span class="code-number">0</span>, <span class="code-number">0.052</span>, <span class="code-number">0</span>)
    <span class="code-type">rel</span> <span class="code-property">physics:simulationOwner</span> = &lt;/World/PhysicsScene&gt;

    <span class="code-keyword">def</span> <span class="code-string">"CollisionMesh"</span> (
        prepend apiSchemas = [<span class="code-string">"PhysicsCollisionAPI"</span>]
    )
    {
        <span class="code-type">uniform token</span> <span class="code-property">physics:approximation</span> = <span class="code-string">"convexDecomposition"</span>
        <span class="code-type">float</span> <span class="code-property">physics:friction</span> = <span class="code-number">0.42</span>
        <span class="code-type">float</span> <span class="code-property">physics:restitution</span> = <span class="code-number">0.15</span>
    }
}`;

export const TRACKS = [
  {
    title: '3D \u2192 SimReady',
    description: 'Already have 3D models? We optimize the geometry and add physics properties, collision meshes, semantic labels, and package as OpenUSD. No pre-processing needed. Bulk processing via API is also available for enterprise plan.',
    active: true,
    badge: null,
  },
  {
    title: 'Text/Image \u2192 SimReady',
    description: 'Describe what you need or upload images. Our AI generates the 3D geometry with required topology, texture AND adds physics properties. Perfect for digitizing product catalogs for warehouse robotics.',
    active: false,
    badge: 'Coming soon',
  },
  {
    title: 'Worlds \u2192 SimReady',
    description: 'Describe the environments your robots need. We orchestrate world models to generate diverse, physically accurate 3D scenes with collidable meshes \u2014 ready for navigation, manipulation, and full-scale sim-to-real training.',
    active: false,
    badge: 'Coming soon',
  },
] as const;
