import React, { useEffect, useState } from 'react';
import Menu from '../../components/molecules/menu';
import { categoriesApi } from '../../api/categories-api';
import { Category } from '../../@types/category';
import { Flow } from '../../@types/flow';
import CreateFlowDialog from '../../components/molecules/create-flow-dialog';

const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchData = async () => {
    const categoriesResponse = await categoriesApi.getCategories();
    setCategories(categoriesResponse.data);
  };

  const createFlow = async (category: string, flow: Flow) => {
    await categoriesApi.createFlow(category, flow);
    setIsModalOpen(false);
    fetchData();
  };

  const handleCreateFlowFormSubmit = (values: Flow) => {
    createFlow(selectedCategory, values);
  };

  const handleFormClose = () => {
    setIsModalOpen(false);
  };

  const handleCreateFlowClick = () => {
    setIsModalOpen(true);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Menu
        items={categories}
        onCategorySelect={handleCategorySelect}
        onCreateFlowClick={handleCreateFlowClick}
      />
      <CreateFlowDialog
        isOpen={isModalOpen}
        onClose={handleFormClose}
        onSubmit={handleCreateFlowFormSubmit}
      />
    </div>
  );
};

export default HomeScreen;
