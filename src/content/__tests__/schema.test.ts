import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

import { nav } from '@/content/site';
import { valores } from '@/content/nosotros';
import { services as automotricesServices } from '@/content/automotrices';
import {
  services as logisticasServices,
  gestionNeumaticos,
} from '@/content/logisticas';
import { features as tecnologiaFeatures, blockchainCallout } from '@/content/tecnologia';
import { procesoForte } from '@/content/proceso';
import { porQueForte } from '@/content/home';
import { icons } from '@/components/ui/Icon';
import type { ServiceListItem, ValueItem } from '@/content/types';

const APP_DIR = path.resolve(__dirname, '../../app');

const validIconNames = new Set(Object.keys(icons));

function expectValidServiceListItems(items: ServiceListItem[]) {
  expect(items.length).toBeGreaterThan(0);
  for (const item of items) {
    expect(item.label.trim().length, `label vacío en item id="${item.id}"`).toBeGreaterThan(0);
    expect(
      validIconNames.has(item.icon),
      `icono desconocido "${item.icon}" en item id="${item.id}" — no existe en src/components/ui/Icon.tsx`,
    ).toBe(true);
  }
}

function expectValidValueItems(items: ValueItem[]) {
  for (const item of items) {
    expect(item.title.trim().length, `title vacío en value id="${item.id}"`).toBeGreaterThan(0);
    expect(
      item.description.trim().length,
      `description vacía en value id="${item.id}"`,
    ).toBeGreaterThan(0);
    expect(
      validIconNames.has(item.icon),
      `icono desconocido "${item.icon}" en value id="${item.id}"`,
    ).toBe(true);
  }
}

describe('nosotros.ts', () => {
  it('valores tiene exactamente 8 ítems (regla de negocio del documento del cliente)', () => {
    expect(valores).toHaveLength(8);
  });

  it('todos los valores tienen title/description no vacíos y un icon válido', () => {
    expectValidValueItems(valores);
  });

  it('todos los ids de valores son únicos', () => {
    const ids = valores.map((v) => v.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('automotrices.ts', () => {
  it('services no está vacío, con label no vacío e icon válido en cada ítem', () => {
    expectValidServiceListItems(automotricesServices);
  });
});

describe('logisticas.ts', () => {
  it('services no está vacío, con label no vacío e icon válido en cada ítem', () => {
    expectValidServiceListItems(logisticasServices);
  });

  it('gestionNeumaticos.items no está vacío, con label no vacío e icon válido en cada ítem', () => {
    expectValidServiceListItems(gestionNeumaticos.items);
  });
});

describe('tecnologia.ts', () => {
  it('features no está vacío, con label no vacío e icon válido en cada ítem', () => {
    expectValidServiceListItems(tecnologiaFeatures);
  });

  it('blockchainCallout.body no está vacío', () => {
    expect(blockchainCallout.body.trim().length).toBeGreaterThan(0);
  });
});

describe('proceso.ts', () => {
  it('procesoForte tiene exactamente 8 pasos', () => {
    expect(procesoForte).toHaveLength(8);
  });

  it('los pasos están numerados 1..8 en orden', () => {
    expect(procesoForte.map((p) => p.step)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('cada paso tiene title/description no vacíos', () => {
    for (const p of procesoForte) {
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.description.trim().length).toBeGreaterThan(0);
    }
  });
});

describe('home.ts', () => {
  it('porQueForte tiene exactamente 5 ítems (CONFIANZA/EXPERIENCIA/TECNOLOGÍA/SOLUCIONES INTEGRALES/ATENCIÓN IN SITU)', () => {
    expect(porQueForte).toHaveLength(5);
  });

  it('todos los ítems de porQueForte tienen title/description no vacíos y un icon válido', () => {
    expectValidValueItems(porQueForte);
  });
});

describe('site.ts — nav', () => {
  it.each(nav)('nav item "$label" ($href) apunta a una ruta real bajo src/app', ({ href }) => {
    const pagePath =
      href === '/' ? path.join(APP_DIR, 'page.tsx') : path.join(APP_DIR, href, 'page.tsx');
    expect(fs.existsSync(pagePath), `No existe ${pagePath} para nav.href="${href}"`).toBe(true);
  });
});

describe('íconos referenciados en todo el contenido', () => {
  it('todos los iconos de nosotros/automotrices/logisticas/tecnologia/home existen en el mapa de Icon.tsx', () => {
    const allServiceItems: ServiceListItem[] = [
      ...automotricesServices,
      ...logisticasServices,
      ...gestionNeumaticos.items,
      ...tecnologiaFeatures,
    ];
    const allValueItems: ValueItem[] = [...valores, ...porQueForte];

    const unknownServiceIcons = allServiceItems
      .map((i) => i.icon)
      .filter((icon) => !validIconNames.has(icon));
    const unknownValueIcons = allValueItems
      .map((i) => i.icon)
      .filter((icon) => !validIconNames.has(icon));

    expect(unknownServiceIcons).toEqual([]);
    expect(unknownValueIcons).toEqual([]);
  });
});
