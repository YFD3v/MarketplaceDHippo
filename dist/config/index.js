"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits",
        featured: [
            {
                name: "Escolhas do editor",
                href: "/products?category=ui_kits",
                imageSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "Novos na loja",
                href: "/products?category=ui_kits&sort=desc",
                imageSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Mais Vendidos",
                href: "/products?category=ui_kits",
                imageSrc: "/nav/ui-kits/purple.jpg",
            },
        ],
    },
    {
        label: "Ícones",
        value: "icons",
        featured: [
            {
                name: "Ícones favoritos",
                href: "/products?category=icons",
                imageSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "Novos na loja",
                href: "/products?category=icons&sort=desc",
                imageSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Ícones mais vendidos",
                href: "/products?category=icons",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
];
