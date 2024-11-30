import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PersonalDetailsForm from './pages/PersonalDetailsForm';
import IncomeDetailsForm from './pages/IncomeDetailsForm';
import ExpenseDetailsForm from './pages/ExpenseDetailsForm';
import LoanDetailsForm from './pages/LoanDetailsForm';
import InsuranceDetailsForm from './pages/InsuranceDetailsForm';
import InvestmentDetailsForm from './pages/InvestmentDetailsForm';
import Summary from './pages/Summary';
import Advisory from './pages/Advisory';
import Calculators from './pages/Calculators';
import BlogManagement from './pages/BlogManagement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/personal" element={<PersonalDetailsForm />} />
        <Route path="/income" element={<IncomeDetailsForm />} />
        <Route path="/expenses" element={<ExpenseDetailsForm />} />
        <Route path="/loans" element={<LoanDetailsForm />} />
        <Route path="/insurance" element={<InsuranceDetailsForm />} />
        <Route path="/investments" element={<InvestmentDetailsForm />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/blog/manage" element={<BlogManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;