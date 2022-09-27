export type image = {
  id: number;
  image: string;
  material_id: number;
};

export type likes = {
  buying_details: null;
  currency: {
    id: number;
    name: string;
    code: string;
  };
  currency_id: number;
  id: number;
  images: image[];
  name: string;
  offers: never[];
  price: number;
  store: null;
  summary: null;
}[];

export type carditem = {
  abstract_material_id: null;
  average_rate: null;
  barcode: null;
  buying_details: null;
  code: string;
  currency_id: number;
  definition_id: number;
  group_id: null;
  id: number;
  images: image[];
  is_featured: boolean;
  name: string;
  offers: never[];
  price: number;
  store: {
    id: number;
    name: string;
    about: null;
  };
  store_id: number;
  summary: string;
  view_number: number;
};

export type carddetails = {
  abstract_material_id: null | number;
  approved: number;
  available: boolean;
  average_rate: null;
  barcode: null;
  buying_details: string;
  categories: {
    "": null;
    created_at: null;
    depth: number;
    description: string;
    id: number;
    image: string;
    lft: number;
    name: string;
    parent_id: number;
    pivot: {
      material_id: number;
      category_id: number;
    };
    position: number;
    related_id: number;
    rgt: number;
    updated_at: null;
  }[];
  code: number;
  cost_price: number;
  created_at: string;
  currency_id: number;
  definition: {
    created_at: null;
    enable: number;
    icon: null;
    id: number;
    lft: number;
    name: string;
    rgt: number;
    updated_at: null;
  };
  definition_id: number;
  extra_attributes: null;
  feature_time: null;
  group_id: null | number;
  id: number;
  ignore_quantity: boolean;
  images: image[];
  is_featured: boolean;
  last_seen: string;
  last_synced: string;
  likeMaterials: {
    buying_details: null;
    currency: {
      id: number;
      name: string;
      code: string;
    };
    currency_id: number;
    id: number;
    images: image[];
    name: string;
    offers: never[];
    price: number;
    store: null;
    summary: null;
  }[];
  link: string;
  mark: {
    created_at: string;
    id: number;
    image: string;
    name: string;
    updated_at: string;
    url: string;
  };
  mark_id: number;
  name: string;
  offers: never[];
  original_price: number;
  price: number;
  properties_lookup_values: never[];
  quantity: number;
  store: {
    id: number;
    name: string;
    icon: null;
    image: string;
    about: null;
  };
  store_id: number;
  summary: string;
  updated_at: string;
  user_id: number;
  user_random_order_key: string;
  view_number: number;
  visible: boolean;
};
