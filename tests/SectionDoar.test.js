import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SectionDoar from '@/components/SectionDoar.vue';

describe('SectionDoar.vue', () => {
  it('renderiza corretamente o título do formulário', () => {
    const wrapper = mount(SectionDoar);
    expect(wrapper.text()).toContain('Quero Doar Fraldas');
  });

  it('possui campos obrigatórios no formulário', () => {
    const wrapper = mount(SectionDoar);
    expect(wrapper.find('#nome-doador').exists()).toBe(true);
    expect(wrapper.find('#email-doador').exists()).toBe(true);
    expect(wrapper.find('#telefone-doador').exists()).toBe(true);
    expect(wrapper.find('#endereco-doador').exists()).toBe(true);
    expect(wrapper.find('#tipo-fralda').exists()).toBe(true);
    expect(wrapper.find('#quantidade').exists()).toBe(true);
  });
});
