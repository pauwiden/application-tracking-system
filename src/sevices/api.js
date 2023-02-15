import axios from "axios";

class ApiService {
  async getCandidates() {
    const response = await axios.get(`http://localhost:3000/candidates`);
    return response.data;
  }
  async updateProcessStep(candidate, newProcesstep) {
    candidate.processStep = newProcesstep;
    await axios.put(
      `http://localhost:3000/candidates/${candidate.id}`,
      candidate
    );
  }
  async updateCandidate(candidate) {
    await axios.put(
      `http://localhost:3000/candidates/${candidate.id}`,
      candidate
    );
  }
  async addCandidate(candidate) {
    console.log(candidate);
    await axios.post(`http://localhost:3000/candidates`, candidate);
  }
  async deleteCandidate(candidateId) {
    console.log(candidateId);
    await axios.delete(`http://localhost:3000/candidates/${candidateId}`);
  }
}

const apiService = new ApiService();
export default apiService;
