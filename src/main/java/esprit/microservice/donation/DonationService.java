package esprit.microservice.donation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class DonationService implements IDonationService {
    @Autowired
    DonationRepository donationRepository;

    @Override
    public Donation addDonation(Donation donation) {
        return donationRepository.save(donation);
    }

    @Override
    public void deleteDonation(Long id) {
        donationRepository.deleteById(id);
    }

    @Override
    public Donation updateDonation(Donation donation) {
        return donationRepository.save(donation);
    }

    @Override
    public Donation getDonation(Long id) {
        return donationRepository.findById(id).get();
    }

    @Override
    public List<Donation> getDonations() {
        return donationRepository.findAll();
    }
}
