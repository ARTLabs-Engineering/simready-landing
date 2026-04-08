export interface SeoPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: { title: string; description: string }[];
  howRigydHelps: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  ctaHeadline: string;
  ctaSub: string;
  schemaType: 'SoftwareApplication' | 'Article';
  canonicalPath: string;
}

// ─── Simulation Engines ──────────────────────────────────────

export const ENGINE_PAGES: Record<string, SeoPage> = {
  'isaac-sim': {
    slug: 'isaac-sim',
    title: 'SimReady Assets for NVIDIA Isaac Sim',
    metaTitle: 'SimReady Assets for NVIDIA Isaac Sim | Rigyd',
    metaDescription:
      'Generate physics-enabled OpenUSD assets optimized for NVIDIA Isaac Sim. Automatic mass, friction, and collision mesh estimation. Upload .glb, .fbx, .obj and get sim-ready USD in minutes.',
    heroHeadline: 'SimReady assets for<br /><span class="text-amber">NVIDIA Isaac Sim</span>',
    heroSub:
      'Upload any 3D model and get physics-enabled OpenUSD assets validated for Isaac Sim. Rigyd estimates mass, friction, restitution, and generates collision meshes automatically.',
    painPoints: [
      {
        title: 'Manual physics annotation is slow',
        description:
          'Isaac Sim requires USDPhysics schemas with rigid body, collision, and mass APIs. Manually annotating each asset takes hours per object.',
      },
      {
        title: 'Limited SimReady library',
        description:
          'NVIDIA\'s SimReady library has ~1,000 assets. A single warehouse simulation can require 50,000+ unique objects with accurate physics.',
      },
      {
        title: 'Format conversion headaches',
        description:
          'Getting .glb, .fbx, or .obj files into Isaac Sim-compatible OpenUSD with proper physics schemas requires multiple tools and manual steps.',
      },
    ],
    howRigydHelps: [
      {
        title: 'Direct OpenUSD output',
        description:
          'Rigyd outputs validated OpenUSD with PhysicsRigidBodyAPI, PhysicsMassAPI, and PhysicsCollisionAPI — ready to drop into Isaac Sim.',
      },
      {
        title: 'AI-powered physics estimation',
        description:
          'Mass, friction, restitution, and center of mass are estimated automatically using multi-view analysis and a calibrated materials database.',
      },
      {
        title: 'Collision mesh generation',
        description:
          'Automatic convex decomposition (V-HACD) generates collision geometry optimized for Isaac Sim\'s PhysX runtime.',
      },
    ],
    stats: [
      { value: '97%', label: 'cost reduction vs manual asset preparation' },
      { value: '~5 min', label: 'per asset, from upload to sim-ready USD' },
      { value: '1,000+', label: 'assets generated for Isaac Sim workflows' },
    ],
    ctaHeadline: 'Start building simulations in Isaac Sim faster',
    ctaSub: 'Upload your first 3D model and get a physics-enabled OpenUSD asset in minutes.',
    schemaType: 'SoftwareApplication',
    canonicalPath: '/for/isaac-sim',
  },

  omniverse: {
    slug: 'omniverse',
    title: 'OpenUSD Assets for NVIDIA Omniverse',
    metaTitle: 'OpenUSD Assets for NVIDIA Omniverse | Rigyd',
    metaDescription:
      'Create simulation-ready OpenUSD assets for NVIDIA Omniverse. Physics-enabled 3D models with mass, friction, collision meshes, and semantic labels. Compatible with Omniverse SimReady spec.',
    heroHeadline: 'OpenUSD assets for<br /><span class="text-amber">NVIDIA Omniverse</span>',
    heroSub:
      'Generate Omniverse-compatible OpenUSD assets with full SimReady compliance. Physics properties, collision geometry, semantic labels, and material bindings — all automated.',
    painPoints: [
      {
        title: 'SimReady compliance is complex',
        description:
          'Omniverse SimReady spec requires physics, semantics, materials, and validated USD structure. Meeting the full spec manually is time-consuming.',
      },
      {
        title: 'Digital twin bottleneck',
        description:
          'Building digital twins in Omniverse requires thousands of physics-accurate assets. Manual creation doesn\'t scale.',
      },
      {
        title: 'Cross-app interoperability',
        description:
          'Assets need to work across Omniverse apps — Isaac Sim, USD Composer, and third-party connectors. Consistency is hard to maintain.',
      },
    ],
    howRigydHelps: [
      {
        title: 'Full SimReady compliance',
        description:
          'Rigyd outputs pass NVIDIA SimReady Foundation validators with proper USDPhysics schemas, semantic labels, and material bindings.',
      },
      {
        title: 'Scales to thousands of assets',
        description:
          'Bulk processing via API lets you convert entire asset libraries to Omniverse-ready OpenUSD. Enterprise plans support high-volume pipelines.',
      },
      {
        title: 'Works with your existing models',
        description:
          'Upload .glb, .fbx, or .obj files. No pre-processing needed — Rigyd handles geometry optimization and physics annotation.',
      },
    ],
    stats: [
      { value: '97%', label: 'cost reduction vs manual USD authoring' },
      { value: '100%', label: 'SimReady spec compliance on output' },
      { value: '$370K', label: 'saved per 1,000-object simulation project' },
    ],
    ctaHeadline: 'Build your Omniverse asset library faster',
    ctaSub: 'Convert any 3D file to SimReady-compliant OpenUSD in minutes.',
    schemaType: 'SoftwareApplication',
    canonicalPath: '/for/omniverse',
  },

  gazebo: {
    slug: 'gazebo',
    title: 'Physics-accurate Assets for Gazebo Simulation',
    metaTitle: 'Physics-accurate Assets for Gazebo Simulation | Rigyd',
    metaDescription:
      'Generate physics-accurate 3D assets for Gazebo and ROS 2 robotics simulation. Automatic mass, friction, and collision geometry estimation from .glb, .fbx, .obj files.',
    heroHeadline: 'Physics-accurate assets for<br /><span class="text-amber">Gazebo</span>',
    heroSub:
      'Upload 3D models and get assets with accurate mass, inertia, friction, and collision geometry ready for Gazebo and ROS 2 simulation pipelines.',
    painPoints: [
      {
        title: 'SDF/URDF physics is tedious',
        description:
          'Gazebo models need accurate inertial properties, collision geometry, and friction parameters. Estimating these manually for each object is error-prone.',
      },
      {
        title: 'Limited model libraries',
        description:
          'Gazebo model repositories have limited variety. Custom environments need hundreds of unique objects with realistic physics.',
      },
      {
        title: 'ROS 2 pipeline friction',
        description:
          'Getting 3D assets from design tools into a ROS 2 simulation pipeline involves multiple conversion steps and manual physics annotation.',
      },
    ],
    howRigydHelps: [
      {
        title: 'Automatic inertial estimation',
        description:
          'Rigyd estimates mass, center of mass, and inertia tensors using AI-powered material identification and geometry analysis.',
      },
      {
        title: 'Collision mesh generation',
        description:
          'Convex decomposition generates collision geometry that balances simulation accuracy with performance — configurable for navigation or manipulation tasks.',
      },
      {
        title: 'OpenUSD interoperability',
        description:
          'Rigyd outputs OpenUSD that can be converted to SDF/URDF for Gazebo, maintaining all physics properties across format boundaries.',
      },
    ],
    stats: [
      { value: '97%', label: 'cost reduction in asset preparation' },
      { value: '40%', label: 'better real-world performance with physics-accurate training data' },
      { value: '~5 min', label: 'from upload to simulation-ready asset' },
    ],
    ctaHeadline: 'Accelerate your Gazebo simulations',
    ctaSub: 'Upload a 3D model and get physics-accurate assets for ROS 2 in minutes.',
    schemaType: 'SoftwareApplication',
    canonicalPath: '/for/gazebo',
  },

  mujoco: {
    slug: 'mujoco',
    title: 'Simulation-Ready Models for MuJoCo',
    metaTitle: 'Simulation-Ready Models for MuJoCo | Rigyd',
    metaDescription:
      'Create simulation-ready 3D models for MuJoCo with accurate mass, friction, and collision geometry. Convert .glb, .fbx, .obj to physics-enabled assets for robot learning.',
    heroHeadline: 'Simulation-ready models for<br /><span class="text-amber">MuJoCo</span>',
    heroSub:
      'Convert 3D assets into models with accurate physics properties for MuJoCo. AI estimates mass, friction, contact parameters, and generates collision geometry automatically.',
    painPoints: [
      {
        title: 'MuJoCo XML authoring is manual',
        description:
          'Defining geoms, bodies, and joints with accurate physical parameters in MJCF XML requires domain expertise and per-object tuning.',
      },
      {
        title: 'Physics estimation guesswork',
        description:
          'Estimating mass, friction, and contact parameters for arbitrary objects is time-consuming. Inaccurate values lead to unrealistic sim behavior.',
      },
      {
        title: 'Scaling object diversity',
        description:
          'Training generalizable manipulation policies needs thousands of varied objects. Creating each one manually doesn\'t scale.',
      },
    ],
    howRigydHelps: [
      {
        title: 'AI-powered contact parameters',
        description:
          'Rigyd estimates friction, restitution, and condim values using material identification — calibrated for MuJoCo\'s contact model.',
      },
      {
        title: 'Accurate mass and inertia',
        description:
          'Volume estimation combined with material density lookup produces mass and inertia values within domain randomization variance ranges.',
      },
      {
        title: 'Bulk object generation',
        description:
          'Convert entire object datasets at once. Enterprise API supports high-throughput pipelines for building diverse training object sets.',
      },
    ],
    stats: [
      { value: '97%', label: 'faster than manual physics annotation' },
      { value: '15-20%', label: 'mass accuracy vs measured (within DR ranges)' },
      { value: '$370K', label: 'saved per 1,000-object project' },
    ],
    ctaHeadline: 'Build better MuJoCo training environments',
    ctaSub: 'Upload a 3D model and get physics-accurate assets for MuJoCo in minutes.',
    schemaType: 'SoftwareApplication',
    canonicalPath: '/for/mujoco',
  },

  unreal: {
    slug: 'unreal',
    title: 'Digital Twin Assets for Unreal Engine',
    metaTitle: 'Digital Twin Assets for Unreal Engine | Rigyd',
    metaDescription:
      'Generate simulation-ready assets for Unreal Engine digital twins. Physics-enabled OpenUSD with mass, friction, and collision meshes. Import-ready for UE5 robotics simulation.',
    heroHeadline: 'Digital twin assets for<br /><span class="text-amber">Unreal Engine</span>',
    heroSub:
      'Create physics-enabled assets for Unreal Engine robotics simulations and digital twins. Automatic physics estimation, collision geometry, and OpenUSD output.',
    painPoints: [
      {
        title: 'Physics setup is fragmented',
        description:
          'Unreal Engine requires separate physics asset configuration, collision setup, and material assignments. Each asset needs individual attention.',
      },
      {
        title: 'Digital twins need thousands of objects',
        description:
          'Factory and warehouse digital twins require massive libraries of physically accurate objects. Manual creation can\'t keep up.',
      },
      {
        title: 'Sim-to-real accuracy gap',
        description:
          'Inaccurate physics parameters in UE simulations lead to policies that fail in the real world. Getting physics right is critical.',
      },
    ],
    howRigydHelps: [
      {
        title: 'OpenUSD bridge to UE5',
        description:
          'Rigyd outputs OpenUSD that imports directly into Unreal Engine 5 via the USD Stage Actor, maintaining physics properties.',
      },
      {
        title: 'Automated collision complexity',
        description:
          'Convex decomposition generates collision geometry at configurable complexity — simple hulls for navigation, detailed meshes for manipulation.',
      },
      {
        title: 'Material-based physics',
        description:
          'AI identifies materials from mesh geometry and appearance, then assigns calibrated friction, restitution, and density values.',
      },
    ],
    stats: [
      { value: '97%', label: 'cost reduction in digital twin asset creation' },
      { value: '~5 min', label: 'per asset, from upload to sim-ready' },
      { value: '40%', label: 'better sim-to-real transfer with accurate physics' },
    ],
    ctaHeadline: 'Build physics-accurate Unreal Engine simulations',
    ctaSub: 'Upload 3D models and get simulation-ready assets for UE5 in minutes.',
    schemaType: 'SoftwareApplication',
    canonicalPath: '/for/unreal',
  },
};

// ─── Robotics Verticals ──────────────────────────────────────

export const VERTICAL_PAGES: Record<string, SeoPage> = {
  'warehouse-robots': {
    slug: 'warehouse-robots',
    title: 'Warehouse Simulation Assets',
    metaTitle: 'Warehouse Simulation Assets for Robotics Training | Rigyd',
    metaDescription:
      'Generate thousands of physics-accurate warehouse objects for robotics simulation. Boxes, pallets, shelving, tools — all with mass, friction, and collision meshes for sim-to-real transfer.',
    heroHeadline: 'Simulation assets for<br /><span class="text-amber">warehouse robots</span>',
    heroSub:
      'A typical warehouse has 50,000+ SKUs. Rigyd converts your product catalog into physics-accurate simulation objects with mass, friction, and collision geometry — ready for pick-and-place training.',
    painPoints: [
      {
        title: 'Warehouses have infinite object variety',
        description:
          'Every box, bottle, bag, and pallet has different weight, friction, and geometry. Manually modeling physics for 50,000+ SKUs is impossible.',
      },
      {
        title: 'Pick-and-place needs accurate physics',
        description:
          'Grasping policies fail in the real world when training objects have wrong mass or friction. Physics accuracy directly impacts sim-to-real transfer.',
      },
      {
        title: 'Seasonal inventory changes constantly',
        description:
          'New products arrive weekly. Your simulation environment needs to keep pace with actual warehouse inventory.',
      },
    ],
    howRigydHelps: [
      {
        title: 'Bulk catalog conversion',
        description:
          'Upload your entire product 3D catalog. Rigyd adds physics properties to every object — mass from material density, friction from surface identification, collision meshes from geometry.',
      },
      {
        title: 'Calibrated for manipulation',
        description:
          'Physics estimates are tuned for robotic grasping and stacking scenarios. Mass accuracy within 15-20% of measured values — well within domain randomization ranges.',
      },
      {
        title: 'API for continuous updates',
        description:
          'Enterprise API integrates with your product pipeline. New SKUs get physics annotations automatically as they enter your catalog.',
      },
    ],
    stats: [
      { value: '50,000+', label: 'typical SKUs in a single warehouse' },
      { value: '$370K', label: 'saved per 1,000-object simulation setup' },
      { value: '97%', label: 'cost reduction vs manual physics annotation' },
    ],
    ctaHeadline: 'Build warehouse simulations at catalog scale',
    ctaSub: 'Convert your product 3D models into sim-ready assets with one upload.',
    schemaType: 'Article',
    canonicalPath: '/verticals/warehouse-robots',
  },

  'robotic-arm': {
    slug: 'robotic-arm',
    title: 'Robotic Arm Training Assets',
    metaTitle: 'Robotic Arm Training Assets for Simulation | Rigyd',
    metaDescription:
      'Create physics-accurate objects for robotic arm manipulation training. Automatic mass, friction, center of mass, and collision mesh generation for grasping, stacking, and assembly tasks.',
    heroHeadline: 'Training assets for<br /><span class="text-amber">robotic arms</span>',
    heroSub:
      'Manipulation policies need objects with accurate mass, friction, and collision geometry. Rigyd generates physics-enabled assets optimized for grasping, stacking, and assembly training.',
    painPoints: [
      {
        title: 'Grasping needs accurate contact physics',
        description:
          'Robotic arm manipulation is highly sensitive to object mass, center of mass, friction coefficients, and collision mesh detail. Wrong values mean failed grasps.',
      },
      {
        title: 'Object diversity improves generalization',
        description:
          'Training on a small set of objects produces brittle policies. Thousands of varied objects with realistic physics are needed for real-world robustness.',
      },
      {
        title: 'Center of mass matters',
        description:
          'Asymmetric objects like tools, bottles, and electronics have off-center mass distributions. Ignoring this produces unrealistic simulation behavior.',
      },
    ],
    howRigydHelps: [
      {
        title: 'Precise center of mass estimation',
        description:
          'Rigyd analyzes object geometry and identified materials to estimate center of mass position — critical for manipulation planning.',
      },
      {
        title: 'Detailed collision meshes',
        description:
          'Convex decomposition captures object geometry at the detail level needed for contact-rich manipulation, not just bounding box approximations.',
      },
      {
        title: 'Domain randomization ready',
        description:
          'Physics estimates are calibrated within typical domain randomization variance ranges (mass within 15-20%), enabling robust policy training.',
      },
    ],
    stats: [
      { value: '40%', label: 'better real-world performance with physics-accurate training' },
      { value: '97%', label: 'faster than manual physics annotation' },
      { value: '~5 min', label: 'per object from upload to sim-ready' },
    ],
    ctaHeadline: 'Train better manipulation policies',
    ctaSub: 'Upload objects your robot needs to handle and get sim-ready assets in minutes.',
    schemaType: 'Article',
    canonicalPath: '/verticals/robotic-arm',
  },

  'humanoid-robots': {
    slug: 'humanoid-robots',
    title: 'Humanoid Robot Simulation Assets',
    metaTitle: 'Humanoid Robot Simulation Assets | Rigyd',
    metaDescription:
      'Generate physics-accurate environment objects for humanoid robot simulation. Furniture, tools, appliances with mass, friction, and collision meshes for whole-body interaction training.',
    heroHeadline: 'Simulation assets for<br /><span class="text-amber">humanoid robots</span>',
    heroSub:
      'Humanoid robots interact with entire environments. Rigyd generates physics-accurate furniture, tools, appliances, and everyday objects for whole-body manipulation and navigation training.',
    painPoints: [
      {
        title: 'Humanoids interact with everything',
        description:
          'Unlike single-arm robots, humanoids need to navigate, grasp, push, pull, and manipulate objects across entire rooms. Every object needs physics.',
      },
      {
        title: 'Home environments are complex',
        description:
          'Training a humanoid for home tasks requires thousands of diverse objects — furniture, kitchen items, tools, electronics — all with accurate physical properties.',
      },
      {
        title: 'Whole-body contact is unforgiving',
        description:
          'Humanoid locomotion and manipulation involve full-body contacts. Inaccurate object physics leads to unrealistic fall recovery and interaction behaviors.',
      },
    ],
    howRigydHelps: [
      {
        title: 'Full environment object sets',
        description:
          'Convert entire 3D catalogs of household and industrial objects. Every item gets mass, friction, restitution, and collision geometry for realistic interaction.',
      },
      {
        title: 'Furniture-scale collision meshes',
        description:
          'From chairs to refrigerators, Rigyd generates collision geometry that captures functional surfaces — seat shapes, handle positions, shelf clearances.',
      },
      {
        title: 'Semantic labels included',
        description:
          'Each asset gets semantic labels and material identification, enabling perception-in-the-loop training and scene understanding tasks.',
      },
    ],
    stats: [
      { value: '40%', label: 'better real-world transfer with accurate synthetic training' },
      { value: '$370K', label: 'saved per 1,000-object environment build' },
      { value: '1,000', label: 'SimReady assets exist today — humanoids need 10x that' },
    ],
    ctaHeadline: 'Build environments your humanoid can learn from',
    ctaSub: 'Upload household 3D models and get physics-accurate training assets in minutes.',
    schemaType: 'Article',
    canonicalPath: '/verticals/humanoid-robots',
  },
};

// ─── Use Cases ───────────────────────────────────────────────

export const USE_CASE_PAGES: Record<string, SeoPage> = {
  'sim-to-real': {
    slug: 'sim-to-real',
    title: '3D Assets for Better Sim-to-Real Transfer',
    metaTitle: '3D Assets for Better Sim-to-Real Transfer | Rigyd',
    metaDescription:
      'Close the sim-to-real gap with physics-accurate 3D assets. Rigyd generates simulation objects with calibrated mass, friction, and collision meshes — reducing real-world deployment failures.',
    heroHeadline: '3D assets for better<br /><span class="text-amber">sim-to-real</span> transfer',
    heroSub:
      'The #1 cause of sim-to-real failure is inaccurate simulation data. Rigyd generates 3D assets with calibrated physics properties so policies trained in simulation actually work on real robots.',
    painPoints: [
      {
        title: 'The sim-to-real gap is a physics gap',
        description:
          'When simulation objects have wrong mass, friction, or collision geometry, trained policies fail on real hardware. The gap isn\'t the simulator — it\'s the data.',
      },
      {
        title: 'Domain randomization needs a good baseline',
        description:
          'Randomizing around inaccurate physics values produces worse policies, not better ones. Domain randomization works best when centered on realistic parameters.',
      },
      {
        title: 'Real-world validation is expensive',
        description:
          'Each sim-to-real iteration costs hardware time, engineer hours, and potential damage to expensive robots. Getting it right in simulation saves real-world cycles.',
      },
    ],
    howRigydHelps: [
      {
        title: 'Calibrated physics baselines',
        description:
          'Rigyd estimates mass within 15-20% of measured values and friction within 0.1 coefficient — providing accurate baselines for domain randomization.',
      },
      {
        title: 'Material-based estimation',
        description:
          'AI identifies per-region materials (ceramic, aluminum, rubber) and maps them to a calibrated physical properties database. No guesswork.',
      },
      {
        title: 'Validated against research benchmarks',
        description:
          'Physics estimation approach validated against NeRF2Physics (CVPR 2024) and GaussianProperty methodologies for mass and friction accuracy.',
      },
    ],
    stats: [
      { value: '40%', label: 'better real-world performance with physics-accurate training data' },
      { value: '15-20%', label: 'mass accuracy vs measured values' },
      { value: '0.1', label: 'friction coefficient accuracy' },
    ],
    ctaHeadline: 'Close the sim-to-real gap with better data',
    ctaSub: 'Start with physics-accurate assets and let domain randomization do the rest.',
    schemaType: 'Article',
    canonicalPath: '/use-cases/sim-to-real',
  },

  'domain-randomization': {
    slug: 'domain-randomization',
    title: 'Simulations Across Every Scenario and Edge Case',
    metaTitle: 'Domain Randomization Assets for Robotics Simulation | Rigyd',
    metaDescription:
      'Generate diverse, physics-accurate 3D assets for domain randomization. Thousands of unique objects with calibrated mass and friction — covering every scenario and edge case.',
    heroHeadline: 'Simulations across<br /><span class="text-amber">every scenario</span> and edge case',
    heroSub:
      'Domain randomization needs two things: accurate physics baselines and massive object diversity. Rigyd provides both — converting any 3D model into a physics-enabled asset calibrated for robust policy training.',
    painPoints: [
      {
        title: 'Variety is the real bottleneck',
        description:
          'Effective domain randomization needs thousands of diverse objects, not just 100 objects with random textures. Object shape, mass, and material variation all matter.',
      },
      {
        title: 'Random physics is worse than no physics',
        description:
          'Randomizing mass uniformly between 0.1-10kg for every object produces nonsensical training data. You need realistic distributions centered on accurate estimates.',
      },
      {
        title: 'Creating varied assets manually doesn\'t scale',
        description:
          'Each new object variation needs geometry, physics properties, and collision meshes. At 4 hours per object, building 1,000 variations takes 4,000 engineer hours.',
      },
    ],
    howRigydHelps: [
      {
        title: 'Scale object diversity instantly',
        description:
          'Upload thousands of unique 3D models and get physics-enabled versions of each. Bulk API processing makes it practical to build truly diverse training sets.',
      },
      {
        title: 'Realistic physics distributions',
        description:
          'Each object gets material-specific physics values, creating natural variation across your dataset — not uniform random noise.',
      },
      {
        title: 'DR-calibrated accuracy',
        description:
          'Mass estimates within 15-20% and friction within 0.1 coefficient. These ranges are intentionally within typical domain randomization variance, making them ideal starting points.',
      },
    ],
    stats: [
      { value: '97%', label: 'cost reduction in building diverse object sets' },
      { value: '$370K', label: 'saved per 1,000-object dataset' },
      { value: '40%', label: 'better real-world performance with diverse, accurate training data' },
    ],
    ctaHeadline: 'Build diverse training datasets at scale',
    ctaSub: 'Upload your object library and get physics-accurate assets for domain randomization.',
    schemaType: 'Article',
    canonicalPath: '/use-cases/domain-randomization',
  },
};

// ─── Helper to get all pages for sitemap ─────────────────────

export function getAllSeoPages(): SeoPage[] {
  return [
    ...Object.values(ENGINE_PAGES),
    ...Object.values(VERTICAL_PAGES),
    ...Object.values(USE_CASE_PAGES),
  ];
}
