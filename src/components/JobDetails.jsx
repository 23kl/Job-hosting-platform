import React from 'react';
import { X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import styles from './JobDetails.module.css'; 

const JobDetails = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <Dialog.Root open={!!job} onOpenChange={() => onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.dialogContent}>
          <div className="flex justify-between items-start mb-4">
            {/* Add Dialog.Title for accessibility */}
            <Dialog.Title className="text-2xl font-bold text-gray-900">{job.title}</Dialog.Title>
            <Dialog.Close className={styles.closeButton}>
              <X size={24} />
            </Dialog.Close>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <p className="text-gray-600">{job.company}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">{job.location}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Job Type</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {job.type}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{job.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-gray-600">{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Salary Range</h3>
              <p className="text-gray-600">{job.salary}</p>
            </div>

            <div className="pt-4">
              <button className={styles.applyButton}>
                Apply for this position
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default JobDetails;
